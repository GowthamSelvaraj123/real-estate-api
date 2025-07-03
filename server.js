const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();

const authRoutes = require("./routes/agent.routes");
const userRoutes = require("./routes/user.routes")
const agentRoutes = require("./routes/agent.routes")
const propertiesRoutes = require("./routes/property.routes")
const inquiryRoutes = require("./routes/inquiry.routes")
const wishlistRoutes = require("./routes/wishlist.routes")
const bookingsRoutes = require("./routes/booking.routes")
const reviewRoutes = require("./routes/review.routes")
const visitRoutes = require("./routes/visit.routes")

connectDB();
app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/properties", propertiesRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/visits", visitRoutes);

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} is has been started`);
})  