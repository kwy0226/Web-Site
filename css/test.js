/* ===========================================
   RESET
=========================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

/* ===========================================
   GLOBAL
=========================================== */

html{
    scroll-behavior:smooth;
    scroll-padding-top:80px;
}

body{

    font-family:'Poppins',sans-serif;
    background:#F8FAFC;

}

/* ===========================================
   NAVIGATION
=========================================== */

header{

    position:fixed;

    top:0;

    left:0;

    width:100%;

    z-index:1000;

}

.navbar{

    width:100%;
    height:80px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:0 70px;

    background:white;

    border-bottom:1px solid #E5E7EB;

    box-shadow:0 8px 20px rgba(0,0,0,.05);

}

.logo{

    display:flex;
    align-items:center;
    height:80px;
    flex-shrink:0;

}

.logo img{

    height:70px;
    width:auto;
    display:block;
    transition:.3s ease;

}

.logo img:hover{

    transform:scale(1.05);

}

.navbar.scrolled .logo{

    color:black;

}

.nav-links{

    display:flex;

    list-style:none;

    gap:45px;

}

.nav-links li a{

    text-decoration:none;

    color:black;

    font-size:16px;

    font-weight:500;

    transition:0.3s ease;

    position:relative;

    letter-spacing:.3px;

}


.nav-links li a:hover{

    color:#2563EB;

}

.nav-links li a::after{

    content:"";

    position:absolute;

    left:0;

    bottom:-6px;

    width:0;

    height:2px;

    background:#2563EB;

    transition:.3s;

}

.nav-links li a:hover::after{

    width:100%;

}


/* ===========================================
   HERO
=========================================== */

#home{

    position:relative;

    height:100vh;

    display:flex;

    align-items:center;

    overflow:hidden;

}

/* Black Overlay */

#home::before{

    content:"";

    position:absolute;

    inset:0;

    background:rgba(0,0,0,.45);

    z-index:1;

}

#home::after{

    content:"";

    position:absolute;

    inset:0;

    background:url("../images/hero.jpeg") center center / cover no-repeat;

    transform:scale(1.08);

    filter:blur(10px);

    z-index:0;

}

/* Content Container */

.hero-content{

    position:relative;

    z-index:2;

    width:1200px;

    margin:auto;

    padding-left:90px;

    padding-top:100px;

}

/* Title */

.hero-content h1{

    color:white;

    font-size:76px;

    font-weight:700;

    line-height:1.1;

    width:620px;

}

/* Subtitle */

.hero-content p{

    color:white;

    font-size:24px;

    margin-top:30px;

    font-weight:500;

}

/* Description */

.hero-content span{

    display:block;

    color:white;

    margin-top:18px;

    font-size:18px;

    opacity:.9;

}

/* Button */

.hero-button{

    display:inline-block;

    margin-top:50px;

    padding:16px 34px;

    background:#2563EB;

    color:white;

    text-decoration:none;

    border-radius:10px;

    font-size:17px;

    font-weight:600;

    transition:.3s;

}

.hero-button:hover{

    background:#1D4ED8;

    transform:translateY(-4px);

    box-shadow:0 12px 30px rgba(37,99,235,.35);

}

/* ===========================================
   INTRODUCTION
=========================================== */

.container{

    width:1200px;

    margin:0 auto;

    padding:0 20px;

}

#introduction{
    background:white;
    padding:75px 0 70px;
    scroll-margin-top:80px;
}

.section-title{
    text-align:center;
    margin-bottom:35px;
}

.section-title h2{

    font-size:46px;

    color:#0F172A;

    margin-bottom:20px;

}

.section-title p{

    width:700px;

    margin:auto;

    font-size:18px;

    color:#64748B;

    line-height:1.8;

}

.intro-content{

    display:grid;

    grid-template-columns:520px 1fr;

    gap:55px;

    align-items:start;

}

.intro-image{

    flex:0.9;

}

.intro-image img{

    width:100%;

    height:420px;

    object-fit:cover;

    border-radius:20px;

    box-shadow:0 12px 30px rgba(0,0,0,.08);

}

.intro-text{

    flex:1.1;

}

.intro-text h3{

    font-size:42px;

    line-height:1.2;

    color:#0F172A;

    margin-bottom:30px;

}

.intro-text p{

    font-size:18px;

    color:#475569;

    line-height:1.9;

    margin-bottom:35px;

}

.intro-feature{

    display:grid;

    grid-template-columns:1fr 1fr;

    gap:22px;

    margin-top:40px;

}

.intro-feature div{

    font-size:17px;

    font-weight:500;

    color:#0F172A;
}

/* ===========================================
   WHY CHOOSE US
=========================================== */

/* ===========================================
   WHY CHOOSE US
=========================================== */

#why-us{
    background:#F8FAFC;
    padding:75px 0 75px;
    display:flex;
    align-items:center;
    scroll-margin-top:80px;
}

.why-content{

    display:grid;

    grid-template-columns:420px 1fr;

    gap:80px;

    align-items:start;

}

.why-left h2{

    font-size:46px;

    margin-bottom:25px;

}

.why-left p{

    color:#64748B;

    line-height:1.9;

    font-size:18px;

}

.why-left .hero-button{

    margin-top:40px;

}

.why-grid{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:20px;

}

.why-card{

    background:white;

    border-radius:18px;

    padding:28px 20px;

    height:260px;

    text-align:center;

    transition:.35s ease;

    box-shadow:0 10px 25px rgba(0,0,0,.05);

    border:1px solid #E2E8F0;

}

.why-card:hover{

    transform:translateY(-10px);

    box-shadow:0 18px 40px rgba(0,0,0,.12);

}

.why-card i{

    font-size:34px;

    color:#2563EB;

    margin-bottom:18px;

}

.why-card:hover i{

    transform:scale(1.1);

    transition:.3s;

}

.why-card h3{

    font-size:18px;

    color:#0F172A;

    margin-bottom:18px;

}

.why-card p{

    color:#64748B;

    font-size:14px;

    line-height:1.6;

}

/* ===========================================
   GALLERY
=========================================== */

#gallery{
    background:white;
    padding:75px 0 50px;
    scroll-margin-top:80px;
}

.gallery-slider{

    position:relative;

    display:flex;

    justify-content:center;

    align-items:center;

    margin-top:28px;

}

.gallery-slider img{

    width:100%;

    max-width:850px;

    height:340px;

    object-fit:cover;

    border-radius:18px;

    box-shadow:0 15px 40px rgba(0,0,0,.08);

}

.arrow{

    position:absolute;

    top:50%;

    transform:translateY(-50%);

    width:50px;

    height:50px;

    border:none;

    border-radius:50%;

    background:white;

    color:#2563EB;

    font-size:28px;

    cursor:pointer;

    box-shadow:0 10px 25px rgba(0,0,0,.12);

    transition:.3s;

}

.arrow:hover{

    background:#2563EB;

    color:white;

}

.left{

    left:25px;

}

.right{

    right:25px;

}

.gallery-dots{

    display:flex;

    justify-content:center;

    gap:12px;

    margin-top:18px;

}

.gallery-dots span{

    width:12px;

    height:12px;

    border-radius:50%;

    background:#CBD5E1;

    cursor:pointer;

    transition:.3s;

}

.gallery-dots .active{

    background:#2563EB;

    transform:scale(1.25);

}

.gallery-info{

    margin-top:20px;

    text-align:center;

}

.gallery-info h3{

    font-size:26px;

    color:#0F172A;

    margin-bottom:8px;

}

.gallery-info p{

    font-size:17px;

    color:#64748B;

    margin-bottom:6px;

}

.gallery-info span{

    color:#94A3B8;

    font-size:15px;

}

.gallery-cta{

    text-align:center;

    margin-top:20px;

}

/* ===========================================
   FOOTER
=========================================== */

footer{

    background:#0F172A;

    color:white;

    margin-top:30px;

}

.footer-content{

    display:grid;

    grid-template-columns:2fr 1fr 1.2fr 1fr;

    gap:60px;

    padding:60px 0;

}

.footer-content h3{

    margin-bottom:20px;

    font-size:22px;

}

.footer-logo-area h2{

    font-size:38px;

    margin-bottom:20px;

}

.footer-content p{

    color:#CBD5E1;

    line-height:1.9;

}

.footer-links a,
.footer-social a{

    display:block;

    color:#CBD5E1;

    text-decoration:none;

    margin-bottom:12px;

    transition:.3s;

}

.footer-links a:hover,
.footer-social a:hover{

    color:white;

}

.footer-contact p{

    margin-bottom:12px;

}

.footer-contact i{

    color:#3B82F6;

    width:24px;

}

.footer-social i{

    width:24px;

    color:#3B82F6;

}

.footer-bottom{

    background:#0B1120;

    text-align:center;

    padding:20px;

    color:#94A3B8;

}

/* ===========================================
   PRODUCT HEADER
=========================================== */

#product-header{

    padding:150px 0 70px;

    background:white;

}

#product-header .section-title{

    margin-bottom:0;

}

/* ===========================================
   PRODUCT PAGE
=========================================== */

#product-header{

    padding:140px 0 80px;

    background:white;

}

#products{

    padding:20px 0 120px;

    background:#F8FAFC;

}

.product-card{

    width:1100px;

    margin:0 auto 60px;

    display:grid;

    grid-template-columns:520px 1fr;

    align-items:center;

    gap:60px;

    background:white;

    border-radius:20px;

    padding:35px;

    box-shadow:0 12px 35px rgba(0,0,0,.06);

}

/* Product Image */

.product-image{

    position:relative;

    width:100%;

    height:420px;

    overflow:hidden;

    border-radius:18px;

}

.product-image img{

    width:100%;

    height:100%;

    object-fit:cover;

    display:block;

    border-radius:18px;

}

/* Left / Right Arrow */

.product-arrow{

    position:absolute;

    top:50%;

    transform:translateY(-50%);

    width:48px;

    height:48px;

    border:none;

    border-radius:50%;

    background:rgba(255,255,255,.92);

    color:#2563EB;

    font-size:24px;

    cursor:pointer;

    transition:.3s;

    box-shadow:0 8px 20px rgba(0,0,0,.15);

    z-index:10;

}

.product-arrow:hover{

    background:#2563EB;

    color:white;

}

.product-arrow.left{

    left:15px;

}

.product-arrow.right{

    right:15px;

}

/* Product Content */

.product-content h2{

    font-size:34px;

    color:#0F172A;

    margin-bottom:20px;

}

.product-content p{

    color:#64748B;

    font-size:17px;

    line-height:1.8;

}

.product-card:last-child{

    margin-bottom:20px;

}

/* ===========================================
   CTA
=========================================== */

.quotation-section{

    padding:20px 0 20px;

    background:#F8FAFC;

}

.quotation-box{

    width:1000px;

    margin:auto;

    padding:60px;

    text-align:center;

    background:linear-gradient(135deg,#2563EB,#1E40AF);

    border-radius:24px;

    color:white;

    box-shadow:0 20px 45px rgba(37,99,235,.28);

}

.quotation-box h2{

    font-size:42px;

    margin-bottom:18px;

    font-weight:700;

}

.quotation-box p{

    width:700px;

    margin:0 auto 35px;

    line-height:1.8;

    font-size:18px;

    color:rgba(255,255,255,.88);

}

.quotation-btn{

    display:inline-flex;

    align-items:center;

    gap:12px;

    padding:18px 42px;

    background:white;

    color:#2563EB;

    text-decoration:none;

    border-radius:50px;

    font-size:18px;

    font-weight:600;

    transition:.3s;

}

.quotation-btn:hover{

    transform:translateY(-6px);

    box-shadow:0 15px 35px rgba(255,255,255,.25);

}

.quotation-btn i{

    font-size:18px;

}

/* ===========================================
   Floating WhatsApp
=========================================== */

.floating-whatsapp{

    position:fixed;

    right:30px;

    bottom:30px;

    z-index:999;

}

.floating-whatsapp a{

    display:flex;

    align-items:center;

    gap:12px;

    padding:16px 28px;

    background:#25D366;

    color:#fff;

    text-decoration:none;

    border-radius:50px;

    font-size:18px;

    font-weight:600;

    box-shadow:0 12px 30px rgba(0,0,0,.25);

    transition:.3s;

}

.floating-whatsapp a:hover{

    transform:translateY(-4px);

    box-shadow:0 18px 35px rgba(0,0,0,.3);

}

.floating-whatsapp i{

    font-size:28px;

}