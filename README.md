# Movies_review

 ## endPoints

| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/register | This endpoint allow users to register. Hash the password and stores it. | 201 |
| POST | /api/login | This endpoint allow users to login. Return a JWT token on login. | 201 |
| POST | /api/movies | This endpoint allow users to create movie. | 200 |
| GET | /api/movies | This endpoint returns list of all available movies. | 200 |
| GET | /api/movies/:id | This endpoint returns the details of a specific movie identified by its ID. | 200 |
| POST | /api/reviews/:movieId | This endpoint allow users to add reviews for a specific movie identified by its ID. (Protected Route provide JWT token) | 201 |
| GET | /api/reviews/:movieId | This endpoint returns all reviews for a specific movie identified by its ID. | 200 |
| PUT | /api/reviews/:reviewId | This endpoint allow users to update the details of a specific review identified by its ID. (Protected Route) | 204 |
| DELETE | /api/reviews/:reviewId | This endpoint allow users to delete a specific review identified by its ID. (Protected Route) | 202 |
| GET | /api/recommendations | This endpoint returns movie recommendations for the logged-in user based on their watched movies and reviews. (Protected Route) | 200 |


## schemas

User 
```
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String,
  watchedMovies: [{ type: ObjectId, ref: 'Movie' }],
  reviews: [{ type: ObjectId, ref: 'Review' }]
}
```

​
Movie 

```
{
  _id: ObjectId,
  title: String,
  genre: [String],
  releaseYear: Number,
  reviews: [{ type: ObjectId, ref: 'Review' }]
}
```

​
Review

```
{
	 _id: ObjectId,
	 user : { type: ObjectId, ref: 'User' },
	 movie : { type: ObjectId, ref: 'Movie' },
	 rating: Number,
	 comment: String,
	 timestamp: Date
}
```
