# Bytequest Technologies - Frontend Development Task

## Project Overview
This project is a **Next.js**-based e-commerce website built as part of the technical test for Bytequest Technologies. The task involved replicating a given **Figma design** while ensuring responsiveness and integrating an external API to fetch product information dynamically.

## Features
- **Next.js** framework for efficient server-side rendering and static generation.
- **Fully responsive** design to support different screen sizes.
- **Dynamic product listing** using data fetched from the provided API.
- **Reusable components** for better code maintainability.
- **Optimized images** for performance using Next.js **Image Optimization**.
- **Styled using Tailwind CSS** for a clean and modern UI.

## Tech Stack
- **Frontend:** Next.js, React.js, Tailwind CSS
- **API Integration:** Axios / Fetch API
- **State Management:** useState, useEffect
- **Deployment:** Vercel (Optional)

## Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bytequest-task.git
   cd bytequest-task
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will be available at `http://localhost:3000/`

4. **Build and start for production**
   ```bash
   npm run build && npm start
   ```

## API Integration
The project fetches products from the provided API. Ensure the API URL is correctly set up in the code.

Example API Call (Using Axios):
```js
import axios from 'axios';

export async function getServerSideProps() {
  try {
    const res = await axios.get("https://api.example.com/products");
    return {
      props: {
        products: res.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
```

## Folder Structure
```
/bytequest-task
 ├── /app
 │   ├── /components       # Reusable components (Navbar, Card, etc.)
 │   ├── /pages            # Next.js pages (index.js, [id].js, etc.)
 │   ├── /public           # Static assets (Images, Icons, etc.)
 │   ├── /styles           # Global and module CSS files
 │   ├── /utils            # Helper functions
 ├── package.json          # Dependencies & Scripts
 ├── README.md             # Project Documentation
```

## Improvements & Future Enhancements
- **Enhanced Responsiveness:** Improve layout for mobile and tablet views.
- **Better UI Components:** Utilize Next.js built-in components like `next/image` for optimized images.
- **SEO Optimization:** Improve meta tags for better search visibility.
- **Dark Mode Support:** Implement theme toggling for better user experience.

## Deployment
To deploy the application on **Vercel**, follow these steps:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run deployment command:
   ```bash
   vercel
   ```
3. Follow the instructions and get a live URL.

## Conclusion
This project successfully demonstrates **Next.js** capabilities, **API integration**, and **responsive web design**. If you have any feedback or questions, feel free to reach out!

---
**Author:** Hardik Agarwal
