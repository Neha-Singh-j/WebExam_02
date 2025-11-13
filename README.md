
Main ek **restaurant website** banayi, thoda Swiggy jaisa, using **React** and **Tailwind CSS**.

Sabse pehle maine React app create kiya using **Vite**, uske baad install kiye ye main packages —
**tailwindcss**, **axios**, aur **react-router-dom**.
Phir Tailwind setup karke usko `index.css` me import kiya, taaki saare components me styling easily apply ho jaye.

Component strucutre->

Maine project me ye components banaye:

* **Navbar.jsx** → top navigation bar (logo, links, search bar)
* **Footer.jsx** → bottom section, Flowbite ke footer component se thoda customize kiya
* **Home.jsx** → main landing page jahan saare restaurants dikhte hain
* **RestaurantList.jsx** → list of all restaurants mapped from API data
* **RestaurantCard.jsx** → single restaurant ka card (image, name, rating, cuisine, etc.)
* **RestaurantDetails.jsx** → jab user kisi restaurant pe click karta hai, to details aur menu yahan show hota hai

---

### ⚙️ **Functionality**

In **Home.jsx**, maine **axios** se API call kiya inside `useEffect`, aur restaurants data ko state me store kiya:

```js
const [restaurants, setRestaurants] = useState([]);
```

Phir ye data maine **RestaurantList.jsx** me map karke, har restaurant ko prop ke form me **RestaurantCard.jsx** me bheja.
Card component me Tailwind ke classes use karke proper UI design banaya — image upar, name aur rating niche, with hover effects and shadows.

Card clickable banaya, aur jab user click kare to `useNavigate()` se redirect hota hai `/restaurant/:id` route pe.

---

### 🍔 **Restaurant Details Page**

**RestaurantDetails.jsx** me maine again API call kiya using that restaurant id —
uske menu items fetch kiye aur ek aur state me store kiya:

```js
const [menuItems, setMenuItems] = useState([]);
```

Phir har food item ka **name, price, aur description** Tailwind UI ke design ke sath show kiya —
responsive layout ke sath grid aur flex use kiya, aur rounded corners + hover effects bhi add kiye.

---

### 🧭 **Routing**

React Router DOM se routes define kiye:

* `/` → **Home.jsx** (sab restaurants show karta hai)
* `/restaurant/:id` → **RestaurantDetails.jsx** (specific restaurant ke menu items dikhata hai)

**Navbar** aur **Footer** dono common the, isliye maine unhe `App.jsx` me import karke sab pages me lagaya.

---

### 🎨 **Design & Responsiveness**

Tailwind ke utilities use kiye:

* `grid`, `flex`, `gap`, `shadow`, `rounded`, `hover:scale-105` for cards
* `bg-gray-100`, `text-gray-800`, `p-4`, `m-2` etc. for layout and colors
* `sm:`, `md:`, `lg:` classes for responsive design

Website fully responsive aur clean UI ke sath ban gaya, har screen size me properly adjust hota hai.

---

Pure React + Tailwind se ek functional, responsive **Swiggy-style restaurant site** ready ho gayi.
Sab API data dynamic tha, UI fast and smooth tha, aur har page neatly connected with routes tha.
