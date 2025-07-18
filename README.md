
# Password Reset Frontend

A **user authentication system** built with **React (Vite)** that includes **signup, login, forgot password**, and **secure password reset via email**. After resetting the password through a secure link, users can log in and access the homepage. **Styled with Bootstrap** and **deployed on Netlify**, this repository contains the complete frontend code for the password reset flow.

---

## Deployed Links

👉 [Frontend Live URL](https://password-reset-flow-client-ui.netlify.app)

----

## GitHub Repositories

- [Backend GitHub Repoitory](https://github.com/nandhinigurumoorthyy/Password-reset-flow-server)

- 🌐[Backend API](https://password-reset-flow-server-0ne8.onrender.com)
---

## ✨ Features

* ✅ **User Signup & Login**
* ✅ **Forgot Password Functionality**
* ✅ **Password Reset via Email Link**
* ✅ **Secure Login after Reset**
* ✅ **Home Page after Successful Login**

----

📩 **Flow**:
Forgot Password → Email Link → Reset Password → Login → Home

---

## Prerequisites

- Node.js installed
- Backend URL for API integration
- Netlify account for deployment (if hosting the app on Netlify)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/nandhinigurumoorthyy/Password-reset-flow-client.git
   cd Password-reset-flow-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variable:
   ```env
   VITE_API_URL=<your-backend-api-url>
   ```
  
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Deployment on Netlify

1. Create a Netlify account at [https://netlify.com](https://netlify.com).
2. Create a new site:
   - Connect your GitHub repository containing the frontend code.
   - Set up the build and deploy settings:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`
   - Add the following environment variable in the **Environment Variables** section of Netlify:
     - `VITE_API_URL=<your-backend-api-url>`
3. Deploy your site.
4. After deployment, Netlify will provide you with a URL.

---

## API Integration

Ensure your application is using the correct backend API URL. For example, your API calls in the code should look like:
```javascript
const API_URL = import.meta.env.VITE_API_URL;
axios.post(`${API_URL}/create`, { name, email, password });
```
