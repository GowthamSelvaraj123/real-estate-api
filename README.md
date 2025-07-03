  <div class="section">
    <h1>🏠 Real Estate API</h1>
    <p>This is a RESTful API built with <strong>Node.js + Express.js + MongoDB</strong> for managing real estate listings, users, bookings, and more.</p>
  </div>

  <div class="section">
    <h2>🚀 Features</h2>
    <ul>
      <li>User authentication (Register, Login, Logout, Forgot/Reset Password)</li>
      <li>Role-based access for Admins, Agents, and Users</li>
      <li>Property listing CRUD</li>
      <li>Wishlist system</li>
      <li>Booking visits</li>
      <li>Inquiries and agent management</li>
      <li>Review system</li>
      <li>Email integration (Nodemailer)</li>
    </ul>
  </div>

  <div class="section">
    <h2>📦 Folder Structure</h2>
    <pre>
/controllers
/models
/routes
/middleware
/utils
.env
server.js
README.html
    </pre>
  </div>

  <div class="section">
    <h2>🔐 Auth Routes</h2>
    <ul>
      <li><code>POST /api/auth/register</code> – Register user and send welcome email</li>
      <li><code>POST /api/auth/login</code> – Login and return JWT</li>
      <li><code>POST /api/auth/logout</code> – Logout (handled client-side)</li>
      <li><code>POST /api/auth/forgot-password</code> – Send reset password link</li>
      <li><code>POST /api/auth/reset-password</code> – Reset user password</li>
    </ul>
  </div>

  <div class="section">
    <h2>📄 API Endpoints</h2>
    <ul>
      <li><code>GET /api/properties</code> – List all properties</li>
      <li><code>POST /api/properties</code> – Add new property</li>
      <li><code>PUT /api/properties/:id</code> – Update property</li>
      <li><code>DELETE /api/properties/:id</code> – Delete property</li>
      <li><code>GET /api/users</code> – All users</li>
      <li><code>GET /api/users/:id</code> – User details</li>
      <li><code>POST /api/wishlist</code> – Add to wishlist</li>
      <li><code>GET /api/wishlist</code> – Get user's wishlist</li>
      <li><code>POST /api/booking</code> – Book property visit</li>
      <li><code>GET /api/booking</code> – Get bookings</li>
      <li><code>POST /api/reviews</code> – Submit review</li>
      <li><code>GET /api/reviews/:propertyId</code> – Get reviews for a property</li>
      <li><code>POST /api/visits</code> – Schedule visit</li>
      <li><code>GET /api/visits</code> – Get user's visits</li>
      <li><code>POST /api/inquiries</code> – Send inquiry</li>
      <li><code>POST /api/agents</code> – Register agent</li>
      <li><code>GET /api/agents</code> – List agents</li>
    </ul>
  </div>

  <div class="section">
    <h2>⚙️ Environment Setup (.env)</h2>
    <pre>
PORT=5000
MONGO_URI=mongodb://localhost:27017/realestate
JWT_SECRET=your_jwt_secret
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:3000
    </pre>
  </div>

  <div class="section">
    <h2>🛠️ Run Project</h2>
    <pre>
npm install
npm run dev
    </pre>
    <p>Ensure MongoDB is running on your machine or configured in <code>.env</code>.</p>
  </div>

  <div class="section">
    <h2>👨‍💻 Developer</h2>
    <p>Developed by <strong>Gowtham Developer</strong></p>
  </div>