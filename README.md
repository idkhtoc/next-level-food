<h1><a href="https://next-level-foodies-sigma.vercel.app/" target="_blank">Next Level Food</a><h1/>

<img src="assets/logo.png" alt="Next Level Food" width="200"/>

## Description

Next Level Food is a web application built with Next.js that aims to revolutionize the way people discover and interact with food. It provides users with a platform to explore various recipes, share their own creations, and connect with other food enthusiasts.

## Features

- Browse a wide range of recipes.
- Upload and share your own recipes with the community.

> Coming in future

 - Create an account to save favorite recipes and create a personalized profile.
-  Engage with other users by commenting on recipes and participating in discussions.

## Technologies Used

- Next.js
- MongoDB (Mongoose library)
- AWS (S3)

## Installation

1. Clone the repository:
	`git clone https://github.com/your-username/next-level-food.git`
2. Navigate to the project directory:
	`cd next-level-food`
3. Install dependencies:
	`npm i`
4. Create a `.env.local` file to store private constants:
	- AWS_REGION= Your S3 region
	- IMAGES_BUCKET= name of the AWS S3 bucket
	- IMAGES_DOMAIN=$IMAGES_BUCKET.s3.$AWS_REGION.amazonaws.com
	- IMAGES_URL=https://$IMAGES_DOMAIN/
	- AWS_ACCESS_KEY_ID= Access key to the S3 bucket
	- AWS_SECRET_ACCESS_KEY= Secret access key to the S3 bucket
	- DATABASE_URL= MongoDB url
6. Start the development server:
	`npm run dev`
7. Open your browser and visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch
3. Make your changes.
4. Commit your changes
5. Push to the branch
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact me via email: oleksandr.yanov.eu@gmail.com
