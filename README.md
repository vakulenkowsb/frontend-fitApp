just copy the repository to your local machine and run in the terminal this command
docker-compose up 




!!!УВАГА!!!
!!!Attention!!!

read all the comments listed below:

react_app/src/index.css - lines from 6 to 22

react_app/src/index.css - lines from 117 to 122

react_app/src/components/pages/Login/Login.js - lines from 48 to 50 


react_app/src/components/pages/CreateRecipe/CreateRecipe.js - check all the code starting from the line 48 to the end of file (there are also comments on what you should not touch)



To login to see the profile page use such credentials:

username: valera
password: password


password must be equal to "password", but username can be of any value












add this to index.css

/* Global Variables for Colors */
:root {
  --color-primary: #3498db;  /* Main primary color */
  --color-secondary: #2ecc71;  /* Main secondary color */
  --color-accent: #e74c3c;  /* Accent color */
  --color-light: #ecf0f1;  /* Light background or text */
  --color-dark: #2c3e50;  /* Dark background or text */
  --color-muted: #95a5a6;  /* Muted color for less important elements */
  --color-info: #3498db;  /* Info color */
  --color-warning: #f39c12;  /* Warning color */
  --color-success: #27ae60;  /* Success color */
  --color-error: #e74c3c;  /* Error color */
}

/* Global Margins and Paddings */
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}

/* Reset Default Margins and Paddings */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Utility Classes for Consistent Margins */
.m-xs {
  margin: var(--spacing-xs);
}
.m-sm {
  margin: var(--spacing-sm);
}
.m-md {
  margin: var(--spacing-md);
}
.m-lg {
  margin: var(--spacing-lg);
}
.m-xl {
  margin: var(--spacing-xl);
}

/* Utility Classes for Consistent Paddings */
.p-xs {
  padding: var(--spacing-xs);
}
.p-sm {
  padding: var(--spacing-sm);
}
.p-md {
  padding: var(--spacing-md);
}
.p-lg {
  padding: var(--spacing-lg);
}
.p-xl {
  padding: var(--spacing-xl);
}

/* Body and General Styling */
body {
  font-family: Arial, sans-serif;
  background-color: var(--color-light);
  color: var(--color-dark);
  line-height: 1.6;
}

/* Global Heading Styles */
h1, h2, h3, h4, h5, h6 {
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
}

/* Global Link Styling */
a {
  color: var(--color-primary);
  text-decoration: none;
}
a:hover {
  color: var(--color-accent);
}
