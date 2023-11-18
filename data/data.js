const dealsExclusive = [
  {
    ciudad: 'Madrid',
    calificacion: 4.8,
    pais: 'Spain',
    PrecioFull: 950,
    PrecioDiscont: 850,
    img: "/madrid.png"
  },
  {
    ciudad: 'Firenze',
    calificacion: 4.5,
    pais: 'Italy',
    PrecioFull: 850,
    PrecioDiscont: 750,
    img: "/firenze.png"
  },
  {
    ciudad: 'Paris',
    calificacion: 4.4,
    pais: 'France',
    PrecioFull: 699,
    PrecioDiscont: 599,
    img: "/paris.png"
  },
  {
    ciudad: 'London',
    calificacion: 4.8,
    pais: 'UK',
    PrecioFull: 850,
    PrecioDiscont: 850,
    img: "/london.png"
  }
];

const bestVacations = [
  {
    img: "/londonUK.png",
    ciudad: 'Rome',
    pais: 'Italy',
    calificacion: 4.8,
    daysTrip: 10,
    costTour: 5.42
  },
  {
    img: "/londonUK.png",
    ciudad: 'London',
    pais: 'UK',
    calificacion: 4.7,
    daysTrip: 7,
    costTour: 2.42
  },
  {
    img: "/osaka.png",
    ciudad: 'Osaka',
    pais: 'Japan',
    calificacion: 4.8,
    daysTrip: 10,
    costTour: 5.42
  },
];

module.exports = {
  dealsExclusive,
  bestVacations
};
