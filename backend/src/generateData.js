import {mongo} from './db.js'

 const legumeNames = [
    'Haricot vert',
    'Pois chiche',
    'Lentille',
    'Pois gourmand',
    'Fève',
    'Petit pois',
    'Courgette',
    'Aubergine',
    'Tomate',
    'Carotte',
    'Pomme de terre',
    'Oignon',
    'Poivron',
    'Radis',
    'Céleri',
    'Chou-fleur',
    'Brocoli',
    'Asperge',
    'Artichaut',
    'Courge',
    'Épinard',
    'Navet',
    'Fenouil',
    'Betterave',
    'Chou-rave',
    'Poireau',
    'Cresson',
    'Haricot sec',
    'Soja',
    'Mungo',
    'Taro',
    'Igname',
    'Patate douce',
    'Chayote',
    'Poivron piquant',
    'Avocat',
    'Haricot noir',
    'Pois cassé',
    'Pomme grenade',
    'Haricot pinto',
    'Haricot cannellini',
    'Pois mangetout',
    'Maïs',
    'Haricot adzuki',
    'Chou de Bruxelles',
    'Piment',
    'Tomate cerise',
    'Poivron vert',
    'Chou frisé',
    'Piment jalapeño',
    'Haricot borlotti',
    'Pois tarbais',
    'Pâtisson',
    'Feuille de moutarde',
    'Pois Mange-tout',
    'Poivre',
    'Laitue',
    'Mâche',
    'Feuille de blette',
    'Haricot plat',
    'Piment de Cayenne',
    'Piment oiseau',
    'Pois chinois',
    'Feuille de navet',
    'Poire de terre',
    'Haricot de Lima',
    'Piment habanero',
    'Pois Edamame',
    'Courge butternut',
    'Poivron rouge',
    'Poivron jaune',
    'Poivron orange',
    'Haricot garrofón',
    'Pois pigeon',
    'Pois Yardlong',
    'Pois doux',
    'Feuille de laitue',
    'Feuille d\'épinard',
    'Haricot haricot',
    'Pois Lupin',
    'Poivre de Sichuan',
    'Pois à œil noir',
    'Poivre vert',
    'Haricot mauve',
    'Pois mange-tout chinois',
    'Piment Anaheim',
    'Piment Serrano',
    'Piment Chipotle',
    'Cacahuète',
    'Feuille de pissenlit',
    'Feuille de brocoli',
    'Poivre blanc',
    'Poivre noir',
    'Poivre rose',
  ];

function generateLegume() {
  const legumeName = legumeNames[Math.floor(Math.random() * legumeNames.length)];
  const legumePrice = Math.floor(Math.random() * 451) + 50; // Adjust the price range as needed
  return { name: legumeName, price: legumePrice };
}

const legume = Array.from({length: 100}, () => generateLegume())
await mongo.deleteMany({})
await mongo.insertMany(legume)