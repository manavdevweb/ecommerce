//Page qui contient les images et détails des produits 
const products = [
{
  id: 1,
  title: "AMD Ryzen 5 3600",
  price: "148",
  category: "CPU",
    description: `
Marque:	AMD
Marque	AMD
Fabricant de CPU	AMD
Modèle du CPU	Ryzen 5
Vitesse du CPU	4,2 GHz
Socket du CPU	Socket AM4
Cache secondaire	3 MB
Puissance	65 Watts
Taille du cache	32 MB
Nombre de processeurs	6
Processeur : nombre de threads simultanés	12`,
  image: "/imgs/cpu/ryzen53600.jpg"
},
      {
    id: 2,
    title: "AMD Ryzen 5 4500",
    price: 78.99,
    category: "CPU",
    description: `
Marque:	AMD
Fabricant de CPU:	AMD
Modèle du CPU:	Ryzen 5
Vitesse du CPU:	3,6 GHz
Socket du CPU:	Socket AM4
Cache secondaire:	8 MB
Puissance:	65 Watts
Taille du cache:	11 MB
Nombre de processeurs:	6
Processeur : nombre de threads simultanés`, 
    image : "/imgs/cpu/ryzen54500.jpg"
  },
  {
    id: 3,
    title: "AMD Ryzen 5 5600",
    price: 139.99,
    category: "CPU",
    description: `
Marque	AMD
Fabricant de CPU	AMD
Modèle du CPU	AMD Ryzen 7
Vitesse du CPU	3,5 GHz
Socket du CPU	Socket AM4
Cache secondaire	32 MB
Puissance	65 Watts
Taille du cache	35 MB
Nombre de processeurs	6
Processeur : nombre de threads simultanés	12`, 
    image : "/imgs/cpu/ryzen55600.jpg"
  },
  {
    id: 4,
    title: "AMD Ryzen 5 7600x",
    price: 180.99,
    category: "CPU",
    description: `

Marque	AMD
Fabricant de CPU	AMD
Modèle du CPU	Ryzen 5
Vitesse du CPU	5,3 GHz
Socket du CPU	Socket AM5
Cache secondaire	38 MB
Puissance	105 Watts
Taille du cache	38 Modificateur inconnu
Nombre de processeurs	6
Processeur : nombre de threads simultanés: 12`,
    image : "/imgs/cpu/ryzen57600x.jpg"
  },

  {
    id: 5,
    title: "MSI NVIDIA Geforce RTX 5060 8GB Gaming OC",
    price: 429.99,
    category: "Graphic Cards",
     description: `
Coprocesseur graphique	NVIDIA GeForce RTX 5060 
Marque	MSI
Taille de la RAM graphique	8 GB
Vitesse d'horloge du GPU	2662 MHz
Interface de sortie vidéo	DisplayPort
Fabricant de processeurs graphiques	NVIDIA
Type de RAM graphique	GDDR7
Usages recommandés pour le produit	Jeu
Composants inclus	Connecteur de conversion 8 broches x 2 à 16 broches, support VGA, guide rapide
Appareils compatibles	Ordinateur`,
    image : "/imgs/gpu/carte-graphique-msi-nvidia-geforce-rtx-5060-8g-gaming-oc.jpg"
  },
  {
    id: 6,
    title: "Nvidia RTX 5070 12GB ARGB",
    price: 669.99,
    category: "Graphic Cards",
     description: `

Coprocesseur graphique	NVIDIA GeForce RTX 3070
Marque	PNY
Taille de la RAM graphique	12 GB
Vitesse d'horloge du GPU	2325 MHz
Interface de sortie vidéo	DisplayPort, HDMI
Fabricant de processeurs graphiques	NVIDIA
Type de RAM graphique	GDDR7
Usages recommandés pour le produit	Bureau, Jeu, Professionnel
Composants inclus	1x16pin to 2x8pin, RTX 5070 ARGB OC 12GB
Appareils compatibles	Ordinateur`,
    image : "/imgs/gpu/nvidiartx507012gbargb.webp"
  },
  {
    id: 7,
    title: "Nvidia RTX 3060",
    price: 529.99,
    category: "Graphic Cards",
     description: `

Coprocesseur graphique	NVIDIA GeForce RTX 3060
Marque	GIGABYTE
Taille de la RAM graphique	12 GB
Interface de sortie vidéo	DisplayPort, HDMI
Fabricant de processeurs graphiques	NVIDIA
Type de RAM graphique	Mémoire GDDR6
Usages recommandés pour le produit	Jeu
Composants inclus	accessoire
Appareils compatibles	Moniteur
Interface de carte graphique	PCI-Express x16`,
    image : "/imgs/gpu/rtx3060.jpg"
  },
  {
    id: 8,
    title: "Nvidia RTX 5090",
    price: 3981.03,
    category: "Graphic Cards",
     description: `
Coprocesseur graphique	GeForce RTX 5090
Marque	GIGABYTE
Taille de la RAM graphique	32 GB
Interface de sortie vidéo	DisplayPort
Fabricant de processeurs graphiques	NVIDIA
Type de RAM graphique	GDDR7
Usages recommandés pour le produit	Jeu
Composants inclus	Manual
Appareils compatibles	Ordinateur
Interface de carte graphique	PCI-Express x16`,
    image : "/imgs/gpu/rtx5090.jpg"
  },
  {
    id: 9,
    title: "Iphone 17 Pro",
    price: 1379.00,
    category: "Phone",
     description: `
Marque	Apple
Système d'exploitation	iOS
Capacité de stockage de la mémoire	256 Go
Taille de l'écran	6,3 Pouces
Résolution	2622 x 1206
Fréquence de rafraîchissement	120 Hz
Nom de modèle	iPhone 17 Pro
Opérateur sans fil	Tous les transporteurs
Technologie cellulaire	5G
Technologie de connectivité	Bluetooth, NFC, USB, Wi-Fi`,
    image : "/imgs/phone/iphone/iphone-17-pro.jpg"
  },
  {
    id: 10,
    title: "Iphone 13",
    price: 283.00,
    category: "Phone",
     description: `
Marque	Apple
Système d'exploitation	iOS 15
Taille de la mémoire RAM installée	4 Go
Modèle du CPU	Autres
Vitesse du CPU	3,23 GHz
Capacité de stockage de la mémoire	128 Go
Taille de l'écran	6,1 Pouces
Nom de modèle	iPhone 13
Opérateur sans fil	Tous les transporteurs
Technologie cellulaire	5G
`, 
    image : "/imgs/phone/iphone/iphone13.jpg"
  },
  {
    id: 11,
    title: "Iphone 16",
    price: 585.00,
    category: "Phone",
     description: `
Marque	Apple
Système d'exploitation	iOS 17
Taille de la mémoire RAM installée	8 Go
Modèle du CPU	Apple A18
Vitesse du CPU	3,8 GHz
Capacité de stockage de la mémoire	128 Go
Taille de l'écran	6,1 Pouces
Nom de modèle	iPhone 16
Opérateur sans fil	Débloqué
Technologie cellulaire	5G`,
    image : "/imgs/phone/iphone/iphone16.jpg"
  },
  {
    id: 12,
    title: "Samsung Galaxy S24",
    price: 427.00,
    category: "Phone",
     description: `
Marque	Samsung
Système d'exploitation	Android 14
Taille de la mémoire RAM installée	8 Go
Modèle du CPU	Exynos 2400 S5E9945
Vitesse du CPU	1,8 GHz
Capacité de stockage de la mémoire	1 Go
Résolution	3840 x 2400
Fréquence de rafraîchissement	120
Nom de modèle	Galaxy S24
Opérateur sans fil	Débloqué`,
    image : "/imgs/phone/samsung/samsungs24.jpg"
  },


]; 


export default products;