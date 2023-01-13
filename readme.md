Créer un model Place
- title
- type
- owner (user) => relationnel type User 
- pricePerDay
- images: []
- capacity = Capacity(name)
- description
- Address : {
  - city,
  - street,
  - zipCode,
  - gps: {
    lat,
    long
    }
}

Model User: 
rajouter propriété "type"
ENUM[OWNER, CUSTOMER] -
    L 'utilisateur peut être les deux

//controlller:
createPlace
Pour relationnel: https: //mongoosejs.com/docs/populate.html
getMyPlace / getPlaceByUser
getMyPlaces / getPlacesByUser