"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star, ShoppingCart, Heart, Eye, Zap, Shield, Truck, Flame, Sparkles, Tag } from "lucide-react";

// Consistent animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Badge = ({ children, variant = "default", icon: Icon }) => {
    const variants = {
        hot: "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30",
        new: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30",
        sale: "bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg shadow-purple-500/30",
        default: "bg-indigo-100 text-indigo-700 shadow-md"
    };

    return (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg ${variants[variant]} backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
            {Icon && <Icon size={12} className={variant === "hot" ? "animate-pulse" : ""} />}
            <span>{children}</span>
        </div>
    );
};

const FeatureIcon = ({ icon: Icon, text }) => (
    <div className="flex flex-col items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
        <Icon size={14} className="text-indigo-500" />
        <span className="font-medium">{text}</span>
    </div>
);

export default function Market() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState(new Set());
    const [hoveredCard, setHoveredCard] = useState(null);
    const [processingProduct, setProcessingProduct] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/products");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Failed to fetch products:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const toggleFavorite = (productId) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev);
            if (newFavorites.has(productId)) {
                newFavorites.delete(productId);
            } else {
                newFavorites.add(productId);
            }
            return newFavorites;
        });
    };

    const getBadgeInfo = (index) => {
        const badges = [
            { type: "hot", text: "HOT", icon: Flame },
            { type: "new", text: "NEW", icon: Sparkles },
            { type: "sale", text: "SALE", icon: Tag }
        ];
        return badges[index % badges.length];
    };

    const getRandomRating = () => (4.2 + Math.random() * 0.7).toFixed(1);
    const getRandomReviews = () => Math.floor(Math.random() * 500) + 100;

    return (
        <section id="market" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        variants={fadeInUp}
                        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white relative inline-block"
                    >
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Our Premium Market
                        </span>
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                            viewport={{ once: true }}
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                        />
                    </motion.h2>

                    <motion.p
                        variants={fadeInUp}
                        className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Discover cutting-edge gaming gear designed for champions
                    </motion.p>
                </motion.div>

                {/* Loading State */}
                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center py-20"
                    >
                        <div className="text-center">
                            <div className="relative w-16 h-16 mx-auto mb-4">
                                <div className="absolute inset-0 border-4 border-indigo-200 dark:border-indigo-800 rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                                Loading premium products...
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* Products Grid */}
                {!loading && (
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                    >
                        {products.map((product, index) => {
                            const price = product.default_price.unit_amount / 100;
                            const originalPrice = price * 1.3;
                            const badge = getBadgeInfo(index);
                            const rating = getRandomRating();
                            const reviews = getRandomReviews();
                            const isHovered = hoveredCard === product.id;

                            return (
                                <motion.div
                                    key={product.id}
                                    variants={cardVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        y: -8,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    onHoverStart={() => setHoveredCard(product.id)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                    className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
                                >
                                    {/* Badge and Favorite */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                                        <Badge variant={badge.type} icon={badge.icon}>{badge.text}</Badge>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => toggleFavorite(product.id)}
                                            className={`p-2.5 rounded-lg backdrop-blur-md transition-all duration-300 ${favorites.has(product.id)
                                                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                                                    : 'bg-white/90 text-gray-600 hover:bg-white shadow-md'
                                                }`}
                                        >
                                            <Heart size={14} fill={favorites.has(product.id) ? "currentColor" : "none"} />
                                        </motion.button>
                                    </div>

                                    {/* Product Image */}
                                    <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                                        <Image
                                            src={product.images?.[0] || "/assets/hero-img.png"}
                                            alt={product.name}
                                            fill
                                            unoptimized
                                            className="object-cover p-6 transition-transform duration-500 group-hover:scale-105"
                                        />

                                        {/* Overlay with Quick Actions */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: isHovered ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-6"
                                        >
                                            <div className="flex gap-3">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-3 bg-white/95 text-gray-800 rounded-lg hover:bg-white transition-all shadow-lg backdrop-blur-sm"
                                                >
                                                    <Eye size={18} />
                                                </motion.button>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-3 bg-white/95 text-gray-800 rounded-lg hover:bg-white transition-all shadow-lg backdrop-blur-sm"
                                                >
                                                    <ShoppingCart size={18} />
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 space-y-4">
                                        {/* Rating and Reviews */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={13}
                                                            className={`${i < Math.floor(rating)
                                                                    ? 'text-amber-400 fill-current'
                                                                    : 'text-gray-300'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    {rating}
                                                </span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {reviews} reviews
                                            </span>
                                        </div>

                                        {/* Product Title */}
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                            {product.name}
                                        </h3>

                                        {/* Product Description */}
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                                            {product.description || "Premium tech gear designed for gaming professionals and enthusiasts."}
                                        </p>

                                        {/* Feature Icons */}
                                        <div className="flex justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                                            <FeatureIcon icon={Zap} text="High Performance" />
                                            <FeatureIcon icon={Shield} text="2Y Warranty" />
                                            <FeatureIcon icon={Truck} text="Free Delivery" />
                                        </div>

                                        {/* Price Section */}
                                        <div className="space-y-3 pt-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-baseline gap-3">
                                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                                        ${price}
                                                    </span>
                                                    <span className="text-sm text-gray-400 line-through font-medium">
                                                        ${originalPrice.toFixed(2)}
                                                    </span>
                                                </div>
                                                <span className="px-2 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-md border border-green-200">
                                                    {((originalPrice - price) / originalPrice * 100).toFixed(0)}% OFF
                                                </span>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <motion.button
                                            onClick={async () => {
                                                setProcessingProduct(product.id);
                                                try {
                                                    await router.push(`/product/${product.id}`);
                                                } finally {
                                                    setProcessingProduct(null);
                                                }
                                            }}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            disabled={processingProduct === product.id}
                                            className={`w-full py-3.5 px-6 rounded-xl font-semibold text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/button 
                        ${processingProduct === product.id
                                                    ? "bg-indigo-400 text-white cursor-not-allowed"
                                                    : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-xl"
                                                }`}
                                        >
                                            {processingProduct === product.id ? (
                                                <motion.div
                                                    key="loading"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="flex items-center justify-center space-x-2"
                                                >
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    <span>Processing...</span>
                                                </motion.div>
                                            ) : (
                                                <>
                                                    <ShoppingCart
                                                        size={18}
                                                        className="transition-transform group-hover/button:scale-105"
                                                    />
                                                    <span>Add to Cart</span>
                                                </>
                                            )}
                                        </motion.button>

                                        {/* Stock Indicator */}
                                        <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400">
                                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                                            <span className="text-xs font-medium">
                                                {Math.floor(Math.random() * 5) + 3} items left
                                            </span>
                                        </div>
                                    </div>

                                    {/* Shine Effect */}
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </div>
        </section>
    );
}