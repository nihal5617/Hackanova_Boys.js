import Post from "../models/Post.js";
import User from "../models/User.js";
import { check, validationResult } from "express-validator";

export const createPost = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    try {
        const user = await User.findById(req.params.id).select('-password');

        const newPost = new Post({
            title: req.body.title,
            name: user.name,
            // image: req.body.image,
            user: req.params.id,
            desc: req.body.desc,
        });

        const post = await newPost.save();

        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

export const getAllPosts = async (req, res) => {
    try {
		const posts = await Post.find().sort({ date: -1 });

		res.json(posts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
}

export const getPostById = async (req, res) => {
    try {
		const post = await Post.findById(req.params.id);

		if (!post) return res.status(404).json({ msg: 'Post not found' });

		res.json(post);
	} catch (err) {
		console.error(err.message);
		if (err.kind == 'ObjectId')
			return res.status(404).json({ msg: 'Post not found' });
		res.status(500).send('Server Error');
	}
}

export const deletePost = async (req, res) => {
    try {
		const post = await Post.findById(req.params.id);
		console.log("hello");
		// Check for ObjectId format and post
		if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
			return res.status(404).json({ msg: 'Post not found' });
		}

		// Check user
		if (post.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'User not authorized' });
		}

		await post.remove();

		res.json({ msg: 'Post removed' });
	} catch (err) {
		console.error(err.message);

		res.status(500).send('Server Error');
	}
}

export const likePost = async (req, res) => {
    try {
		const post = await Post.findById(req.params.id);

		// Check if the post has already been liked
		if (post.likes.some((like) => like.user.toString() === req.user.id)) {
			return res.status(400).json({ msg: 'Post already liked' });
		}

		post.likes.unshift({ user: req.user.id });

		await post.save();

		return res.json(post.likes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
}

export const unlikePost = async (req, res) => {
    try {
		const post = await Post.findById(req.params.id);

		// Check if the post has already been liked
		if (!post.likes.some((like) => like.user.toString() === req.user.id)) {
			return res.status(400).json({ msg: 'Post has not yet been liked' });
		}

		// remove the like
		post.likes = post.likes.filter(
			({ user }) => user.toString() !== req.user.id
		);

		await post.save();

		return res.json(post.likes);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
}

export const addComment = async (req, res) => {
    const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() });

		try {
			const user = await User.findById(req.user.id).select('-password');
			const post = await Post.findById(req.params.id);

			const newComment = new Post({
				text: req.body.text,
				name: user.name,
				avatar: user.avatar,
				user: req.user.id,
			});

			post.comments.unshift(newComment);

			await post.save();

			res.json(post.comments);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
}

export const deleteComment = async (req, res) => {
    try {
		const post = await Post.findById(req.params.id);

		// Pull out comment
		const comment = post.comments.find(
			(comment) => comment.id === req.params.comment_id
		);
		// Make sure comment exists
		if (!comment) {
			return res.status(404).json({ msg: 'Comment does not exist' });
		}
		// Check user
		if (comment.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: 'User not authorized' });
		}

		post.comments = post.comments.filter(
			({ id }) => id !== req.params.comment_id
		);

		await post.save();

		return res.json(post.comments);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send('Server Error');
	}
}