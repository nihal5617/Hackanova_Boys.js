import { useState, useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton, Popover, Button } from '@mui/material';
import axios from 'axios';

// ----------------------------------------------------------------------

const LANGS = [
  {
    value: 'en',
    label: 'Tour',
  },
  {
    value: 'de',
    label: 'Assistance',
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getVideoLink = async () => {
      try {
        const {data} = await axios.get("http://localhost:5000/videocall");
        setVideo(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getVideoLink();
  }, [setVideo]);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  
  // const handleAssistance = async() => {
  //   try{

  //   }catch(error){
  //     console.log(error)
  //   }
  // }

  const handleTour = () => {
  }

  return (
    <>
      <Button
        onClick={handleOpen}
        // sx={{
        //   padding: 0,
        //   width: 44,
        //   height: 44,
        //   ...(open && {
        //     bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
        //   }),
        // }}
        variant="contained"
        sx={{
          backgroundColor: '#fff',
          color: 'primary.main',
        }}
      > 
      HELP
      </Button>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {/* {LANGS.map((option) => (
            <MenuItem key={option.value} selected={option.value === LANGS[0].value} onClick={() => handleClose()}>
              {option.label}
            </MenuItem>
          ))} */}
          <MenuItem onClick={() => handleTour()}>
              Tour
            </MenuItem>
            {video ? 
              <MenuItem>
              <a href={`${video.link}`} target="_blank" rel='noreferrer' style={{textDecoration:'none', color:'black'}}>
              Assistance
            </a>
              </MenuItem>
            : <MenuItem>
              Assistance
            </MenuItem>
}
        </Stack>
      </Popover>
    </>
  );
}
