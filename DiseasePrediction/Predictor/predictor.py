import keras.utils as image
import numpy as np
from keras.models import load_model
import os
from django.conf import settings

model = load_model(os.path.join(settings.BASE_DIR,"model/model.h5"))

disease_class = [
    "Pepper__bell___Bacterial_spot",
    "Pepper__bell___healthy",
    "Potato___Early_blight",
    "Potato___Late_blight",
    "Potato___healthy",
    "Tomato_Bacterial_spot",
    "Tomato_Early_blight",
    "Tomato_Late_blight",
    "Tomato_Leaf_Mold",
    "Tomato_Septoria_leaf_spot",
    "Tomato_Spider_mites_Two_spotted_spider_mite",
    "Tomato__Target_Spot",
    "Tomato__Tomato_YellowLeaf__Curl_Virus",
    "Tomato__Tomato_mosaic_virus",
    "Tomato_healthy",
]

disease_info = [
 {
  "Crop": "Pepper__bell",
  "Disease": "Bacterial_spot",
  "Cause": "Bacterial spot is a widespread disease that causes significant damage to pepper crops grown in warm and moist regions. It can survive on seeds, both on the surface and inside, as well as on certain weeds and spreads through rain or irrigation. The pathogen infects the plant by entering through the leaf pores and any wounds on the plant.",
  "Treatment": "Bacterial spot is a widespread disease that affects pepper and tomato crops grown in warm and humid conditions. The pathogen can survive in seeds, on weeds, and can spread through rain or overhead irrigation. The bacteria enters the plant through leaf pores and wounds, causing significant damage to the crop."
 },
 {
  "Crop": "Pepper__bell",
  "Disease": "Healthy",
  "Cause": "NA",
  "Treatment": "NA"
 },
 {
  "Crop": "Potato",
  "Disease": "Early_blight",
  "Cause": "Early blight of potato is a disease caused by a fungal species. It develops when the potato plants are exposed to prolonged periods of moisture. Symptoms of the disease include the appearance of circular dark brown rings or lesions on the older leaves, which can eventually spread to the stems and other leaves.",
  "Treatment": "Varieties of potato that are resistant to early blight are available. Late-maturing varieties tend to be more resistant than early-maturing varieties. To prevent the disease, it's important to keep the plants healthy, as stress can make them more susceptible to the disease. Avoid overhead irrigation and wait until tubers are fully mature before digging them up to prevent damage."
 },
 {
  "Crop": "Potato",
  "Disease": "Late_blight",
  "Cause": "Late blight of potato is caused by oomycetes, which are similar to fungi. The spores of this disease thrive in cool and damp weather. Symptoms include irregular-shaped lesions on the leaves, stems, and petioles, as well as rot of the potato tubers. A white, cotton-like fungus can also be seen growing on the entire plant.",
  "Treatment": "To prevent the spread of disease in potatoes, it is important to use disease-free seed potatoes. Keep the compost or cull piles away from the potato growing area, and destroy any volunteer potato plants that may appear. During the growing season, keep the tubers covered with soil to prevent infection. Before storing, remove any infected tubers to prevent the spread of disease. Additionally, it is important to kill the vines completely before harvest to avoid any potential contamination of the tubers during harvest."
 },
 {
  "Crop": "Potato",
  "Disease": "Healthy",
  "Cause": "NA",
  "Treatment": "NA"
 },
 {
  "Crop": "Tomato",
  "Disease": "Bacterial_spot",
  "Cause": "Bacteria can be introduced to a garden through contaminated seeds and transplants that may or may not show signs of infection. They can infect plants through natural openings like stomates and through wounds on the plant.",
  "Treatment": "Once a plant has bacterial spot, it cannot be treated and must be removed from the area to prevent the spread of the bacteria to other healthy plants."
 },
 {
  "Crop": "Tomato",
  "Disease": "Early_blight",
  "Cause": "Early blight of tomato generally starts to appear after the first fruits have formed, manifesting as small brown lesions on the lower leaves. These lesions will grow and take on a ring-like shape, with dry and dead tissue in the center. The surrounding plant tissue will turn yellow, then brown, before the leaves die and fall off the plant. The disease does not harm the fruit directly, but the loss of leaves can lead to sun damage on fruits, also known as sun scald.",
  "Treatment": "If you identify that a plant has blight, it is important to take swift action to stop it from spreading. This can be done by removing all of the infected leaves and either burning them or disposing of them in the trash. Additionally, using straw, wood chips, or other types of natural mulch around the base of the plant can help to prevent fungal spores in the soil from coming into contact with the plant."
 },
 {
  "Crop": "Tomato",
  "Disease": "Late_blight",
  "Cause": " Late blight of tomato is caused by oomycetes, which are similar to fungi. The spores of this disease thrive in cool and damp weather. Symptoms include irregular-shaped lesions on the leaves, stems, and petioles, as well as rot of the potato tubers. A white, cotton-like fungus can also be seen growing on the entire plant.",
  "Treatment": "To prevent the spread of blight once it is identified, it is crucial to act fast. To do so, eliminate all leaves that have been affected by the disease by either burning them or disposing them in the garbage. To further prevent fungal spores in the soil from coming into contact with the plant, cover the base of the plant with natural mulch such as straw, wood chips or other materials."
 },
 {
  "Crop": "Tomato",
  "Disease": "Leaf_Mold",
  "Cause": "Tomato leaf mold is a fungal disease caused by Passalora fulva (also known as Cladosporium fulvum), which is an ascomycete fungus that lives on the leaves of tomato plants. The fungus produces spores called conidia that infect the undersides of leaves.",
  "Treatment": "It is recommended to use hot water to treat seeds (25 minutes at 122°F or 50°C) to prevent the growth of pathogens."
 },
 {
  "Crop": "Tomato",
  "Disease": "Septoria_leaf_spot",
  "Cause": "Septoria leaf spot is a disease caused by the fungus Septoria lycopersici. This fungus can infect tomatoes at any stage of growth, however, symptoms usually appear first on the older, lower leaves and stems when the plants are producing fruit.",
  "Treatment": "To minimize the impact of Septoria leaf spot on tomatoes, it is important to adopt a comprehensive approach that includes maintaining good hygiene, implementing cultural practices, and using chemical controls. One key step is to remove or dispose of all tomato plant debris after the fall harvest to eliminate sources of the pathogen."
 },
 {
  "Crop": "Tomato",
  "Disease": "Spider_mites_Two_spotted_spider_mite",
  "Cause": "The tomato red spider mite feeds on the leaves of tomato plants, causing them to turn yellow or white, dry out, and ultimately fall off. In instances of severe infestation, the plant can be significantly damaged or even killed in as little as 3 to 5 weeks if no action is taken to manage the problem.",
  "Treatment": "Cool weather early in the growing season can help control spider mite populations by promoting the activity of predators such as pirate and big-eyed bugs. Additionally, using predator mites as a biological control measure can also be effective in controlling spider mite populations."
 },
 {
  "Crop": "Tomato",
  "Disease": "Target_spot",
  "Cause": "Target spot on tomato is a severe leaf disease caused by Corynespora cassiicola, which affects both greenhouse and field-grown tomatoes. The disease primarily occurs in tropical and subtropical regions of the world.",
  "Treatment": "To prevent the spread of disease, it is important to clear away old plant debris at the end of the growing season. If left in place, the spores on the debris can infect new tomato plants the following year. Proper disposal methods such as bagging and sending to landfill or burning is important. And also, ensure that the compost pile reaches high enough temperatures to kill the spores before adding the debris to it."
 },
 {
  "Crop": "Tomato",
  "Disease": "Tomato_YellowLeaf_Curl_Virus",
  "Cause": "A nutrient deficiency is a likely cause of yellowing leaves on established tomato plants. Tomatoes are heavy feeders and require a significant amount of nutrients to grow properly and produce fruit. A lack of these nutrients in the soil can lead to yellowing leaves.",
  "Treatment": "To manage Tomato yellow leaf curl virus (TYLCV), it is important to reduce the amount of the virus present in the environment by removing or destroying crop residues. Reflective mulches can also be used to repel the insect vector during early stages of crop growth. Using TYLCV-resistant varieties can also be effective. Additionally, using a combination of insecticides at planting, through drip irrigation and as foliar sprays can help to control the insect vector."
 },
 {
  "Crop": "Tomato",
  "Disease": "Tomat_mosaic_virus",
  "Cause": "Tomato potyviruses are spread from plant to plant by various species of aphids. The transmission time for these viruses is short, lasting only minutes to a few hours, thus the spread of the disease is often fast and confined to a specific area.",
  "Treatment": "As there is no cure for mosaic viruses once plants are infected, the best approach is to prevent the infection from occurring in the first place. However, if plants in the garden do show symptoms of mosaic virus, the damage can be minimized by removing and destroying all infected plants. It is important to not put them in the compost pile as the virus can persist in infected plant matter. The best option is to burn the infected plants or dispose of them in the garbage."
 },
 {
  "Crop": "Tomato",
  "Disease": "Healthy",
  "Cause": "NA",
  "Treatment": "NA"
 }
]

def predict(img):
    
    img = image.img_to_array(img)
    img = np.expand_dims(img,axis=0)
    img /= 255
    return disease_info[np.argmax(model.predict(img)[0])] 

if __name__  == "__main__":
    img = image.load_img('tom_sep.jpg', grayscale=False, target_size=(64, 64))
    show_img=image.load_img('tom_sep.jpg', grayscale=False, target_size=(200, 200))
    print("Prediction:",predict(img))
