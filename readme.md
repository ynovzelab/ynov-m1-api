//Back end : 

-> createPlace: Créer et utiliser un middleware pour la création des lieux seulement par les utilisateurs de type "OWNER"
  -> rajouter dans le token le "type" du model User

-> getMyPlaces: finir ce controller et utiliser middleware verifyToken. Récupérer l'id de l'utilisateur pour récupérer le user et ses places.

-> getMyPlace : récupérer un lieu créé par un utilisateur

-> updateMyPlace : modiifer un lieu par l'utilisateur qui l'a créé

-> deleteMyPlace : supprimer un lieu par l'utilisateur qui l'a créé

-> createTypePlace : utiliser le middleware verifyAdmin - ne doit être permis seulment par les utilisateurs de type admin

-> deleteTypePlace : supprimer un type de lieu (seulement pour les admins)

-> updateTypePlace : modifier un type de lieu (seulement pour les admins)

//Front end : 

-> Sur la homepage :
  Récupérer tous les lieux et les afficher dans une grille de cards
  -> Créer des composants 
    -> PlaceCard
    -> PlaceGrid
-> Appliquer l'identité visuelle d'airbnb 