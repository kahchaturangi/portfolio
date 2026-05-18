# 🚀 How to Host Your Portfolio Online for Your CV

To add your portfolio to your CV, it needs to be live on the internet. Here are the **three best ways** to host it, ranging from 100% free platforms to setting up your own custom `.com` domain.

---

## ⚡ Option 1: Netlify (Easiest & Fastest — 1 Minute)
Netlify is a 100% free hosting provider that allows you to launch your website instantly by simply dragging and dropping your folder.

### Step-by-Step:
1. Go to [Netlify.com](https://www.netlify.com/) and sign up for a **Free Account** (you can log in using your GitHub account).
2. Once logged in, go to your dashboard.
3. Scroll down to the bottom where you see **"Or deploy manually - Drag and drop your site folder here"**.
4. Drag your entire `portfolio` folder from your computer and drop it into that box!
5. **Done!** Your site will go live instantly.
6. Go to **Site Settings** > **Change site name** to rename the link to something professional, like:
   * `https://hasinichathurangi.netlify.app`
   * `https://hasini-chathurangi.netlify.app`

---

## 🎓 Option 2: GitHub Pages (100% Free & Professional for Software Engineers)
Since you are a Software Engineer, hosting on GitHub Pages is highly recommended. It shows recruiters that you know how to use version control (Git) and host directly from your repository.
Your site URL will look like: **`https://kahchaturangi.github.io/portfolio`**

### Step-by-Step:
If you want to use this option, we can initialize Git and push it together!
1. Open your GitHub account and create a new public repository named `portfolio`.
2. Run these commands in your project folder (I can help you run these if you approve!):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git branch -M main
   git remote add origin https://github.com/kahchaturangi/portfolio.git
   git push -u origin main
   ```
3. Once uploaded, go to your repository on GitHub.
4. Click **Settings** (top tabs) -> **Pages** (left sidebar).
5. Under **Build and deployment**, set the Branch to `main` and click **Save**.
6. Wait 1 minute, and your site is live!

---

## 🌐 Option 3: Get a Custom `.com` Domain
If you want a real `.com` address (like `hasinichathurangi.com` or `hasinic.com`):
1. **Buy the Domain**: You will need to purchase the domain name from a domain registrar (like Namecheap, GoDaddy, or Hostinger). It costs around **3,500 LKR ($10) per year**.
2. **Link It**: Once you buy it, we can easily link it to your **Netlify** or **GitHub Pages** site for free!
   * *For Netlify*: You just go to **Domain management** > **Add custom domain** and enter your new `.com` domain.

---

### 💡 Recommendation for your CV:
For now, use **Option 1 (Netlify)** or **Option 2 (GitHub Pages)**. Both will give you a **free, secure (HTTPS) link** that looks completely professional on your CV!
