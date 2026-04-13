# MK-Enterprises Website

**Live Site:** [https://vijayjaiswal.github.io/Website-MK-Enterprise/](https://vijayjaiswal.github.io/Website-MK-Enterprise/)

A minimalist and modern static website for MK-Enterprises, a premium carpentry and wooden furniture business based in Pune, Maharashtra. Owned by Karan and Avdesh, the business brings over 2 decades of craftsmanship and an established portfolio of over 500 happy clients. This website is designed to highlight their deep expertise in beautiful wood grain construction and act as a digital gateway to capture new leads.

## 🚀 Features

- **Responsive Modern Design:** Fluid layouts that look beautiful on mobile arrays, tablets, and wide-screen desktops.
- **Dynamic Gallery Filtering:** A custom vanilla JavaScript gallery system that allows users to seamlessly filter projects across various categories like Bed, Kitchen, Entrance, Mandir, TV-Unit, and Wardrobes.
- **Google Forms Async Integration:** An automated lead-capture pipeline. Prospects fill out a sleek form that pushes data dynamically to a Google Form using background `fetch` requests, avoiding bulky redirects.
- **Minimalist Theming:** Warm wood-based color accents designed to complement the natural aesthetic of carpentry.

## 📋 Technologies Used
- HTML5 (Semantic Structure)
- CSS3 (Variables, Flexbox, CSS Grid)
- Vanilla JavaScript (DOM manipulation and Async APIs)
- FontAwesome (Icons)
- Google Fonts (Inter font family)

## 🛠 Setup & Installation

Since this is a fully static website, no complex server binaries or dependency installations (like `npm`) are required.

1. **Clone the Repository**
   ```bash
   git clone <your-repository-url>
   ```

2. **Open Locally**
   Navigate to the project folder and simply open `index.html` in your favorite web browser (Chrome, Edge, Firefox, Safari).

## 📝 Connecting the Google Form

The enquiry form at the bottom of the page currently uses a dummy placeholder. To connect it to your live Google Form:

1. **Create your Google Form**: Create a Google Form capturing exactly the details you requested (Name, Email, Phone, Address, Nature of Work).
2. **Retrieve the POST URL**: Open the Google Form's generated source HTML (using dev tools or "Get Pre-filled Link") and locate the `<form action="...">` property. Copy the action URL (it should end in `/formResponse`).
3. **Retrieve the Input Names**: In the same form source, find the `name="..."` tags for your input fields. They will look like `entry.1234567`.
4. **Update `index.html`**:
   - Change the `<form id="enquiryForm" action="DUMMY_URL">` line to use your real action URL.
   - Update each `<input name="entry.DUMMY">` line with the respective actual `entry.XXXXXX` identifier matching your Google Form.

## 🌍 Deployment

It is recommended to host this static website free of charge using **GitHub Pages**:
1. Commit and push this codebase to a public (or Pro private) GitHub repository.
2. Go to the repository **Settings** -> **Pages**.
3. Set the deploy branch to `main` (or `master`) and save.
4. If you have a custom domain name (e.g., `mk-enterprises.com`), you can add it in the GitHub Pages settings to point it to your repository.

## 📄 License
This project is proprietary and intended for MK-Enterprises.
