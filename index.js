<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MOONX - Radical Lunar Exploration</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Orbitron', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary: #ff2e63;
            --secondary: #08d9d6;
            --accent: #eaeaea;
            --dark: #050a30;
            --darker: #000000;
            --glow: 0 0 10px rgba(8, 217, 214, 0.7), 0 0 20px rgba(8, 217, 214, 0.5);
            --glow-primary: 0 0 10px rgba(255, 46, 99, 0.7), 0 0 20px rgba(255, 46, 99, 0.5);
        }

        body {
            background-color: var(--dark);
            color: var(--accent);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Particle background */
        #particles-js {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
        }

        header {
            background: linear-gradient(135deg, var(--darker), var(--dark));
            padding: 1.2rem 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            border-bottom: 1px solid rgba(8, 217, 214, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .container {
            width: 90%;
            max-width: 1400px;
            margin: 0 auto;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 2rem;
            font-weight: 800;
            color: var(--secondary);
            text-shadow: var(--glow);
            letter-spacing: 2px;
        }

        .logo i {
            font-size: 2.2rem;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 2.5rem;
            position: relative;
        }

        nav ul li a {
            color: var(--accent);
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            padding: 0.5rem 0;
            position: relative;
            letter-spacing: 1px;
        }

        nav ul li a:hover {
            color: var(--secondary);
            text-shadow: var(--glow);
        }

        nav ul li a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--secondary);
            box-shadow: var(--glow);
            transition: width 0.3s ease;
        }

        nav ul li a:hover::after {
            width: 100%;
        }

        /* Hero Section with激进前景效果 */
        .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            overflow: hidden;
            padding-top: 80px;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://images.unsplash.com/photo-1596441861070-5f8861a55595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover no-repeat;
            opacity: 0.3;
            z-index: -1;
        }

        /* 炫酷前景图元素 */
        .hero-foreground {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
            overflow: hidden;
        }

        .foreground-element {
            position: absolute;
            background: linear-gradient(45deg, var(--secondary), var(--primary));
            border-radius: 50%;
            filter: blur(100px);
            opacity: 0.2;
            animation: float 20s infinite ease-in-out;
        }

        .foreground-element:nth-child(1) {
            width: 600px;
            height: 600px;
            top: 20%;
            right: -200px;
            animation-delay: 0s;
        }

        .foreground-element:nth-child(2) {
            width: 500px;
            height: 500px;
            bottom: -100px;
            left: 10%;
            animation-delay: 5s;
        }

        .foreground-element:nth-child(3) {
            width: 400px;
            height: 400px;
            top: 60%;
            left: -150px;
            animation-delay: 10s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-50px) rotate(10deg); }
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            padding: 2rem;
        }

        .hero h1 {
            font-size: 4.5rem;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            background: linear-gradient(90deg, var(--secondary), var(--primary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 15px rgba(8, 217, 214, 0.3), 0 0 30px rgba(255, 46, 99, 0.2);
            animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero p {
            font-size: 1.4rem;
            margin-bottom: 2.5rem;
            color: var(--accent);
            opacity: 0.9;
            animation: fadeInUp 1s ease-out 0.3s forwards;
            opacity: 0;
        }

        .btn {
            display: inline-block;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border: none;
            cursor: pointer;
            box-shadow: var(--glow-primary);
            position: relative;
            overflow: hidden;
            animation: fadeInUp 1s ease-out 0.6s forwards;
            opacity: 0;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: 0.5s;
        }

        .btn:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 0 20px rgba(8, 217, 214, 0.8), 0 0 30px rgba(255, 46, 99, 0.6);
        }

        .btn:hover::before {
            left: 100%;
        }

        section {
            padding: 8rem 0;
            position: relative;
        }

        .section-title {
            text-align: center;
            margin-bottom: 5rem;
            position: relative;
        }

        .section-title h2 {
            font-size: 3rem;
            background: linear-gradient(90deg, var(--secondary), var(--primary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 1.5rem;
            position: relative;
            display: inline-block;
            text-shadow: var(--glow);
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 3px;
            background: linear-gradient(90deg, var(--secondary), var(--primary));
            box-shadow: var(--glow);
            border-radius: 2px;
        }

        .section-title p {
            color: var(--accent);
            max-width: 700px;
            margin: 0 auto;
            font-size: 1.1rem;
            opacity: 0.8;
        }

        /* About Section with激进布局 */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
            position: relative;
        }

        .about-content::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            height: 80%;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            filter: blur(100px);
            opacity: 0.1;
            z-index: -1;
        }

        .about-img {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 0 30px rgba(8, 217, 214, 0.2);
            transform: rotate(-2deg);
            transition: all 0.5s ease;
            position: relative;
        }

        .about-img:hover {
            transform: rotate(0deg) scale(1.03);
            box-shadow: 0 0 40px rgba(8, 217, 214, 0.4);
        }

        .about-img::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border: 2px solid transparent;
            border-radius: 15px;
            background: linear-gradient(45deg, var(--primary), var(--secondary)) border-box;
            -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: 1;
            pointer-events: none;
        }

        .about-img img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.8s ease;
        }

        .about-img:hover img {
            transform: scale(1.1);
        }

        .about-text h3 {
            font-size: 2.2rem;
            margin-bottom: 2rem;
            color: var(--secondary);
            text-shadow: var(--glow);
        }

        .about-text p {
            margin-bottom: 2rem;
            font-size: 1.1rem;
            line-height: 1.8;
        }

        /* Stats with激进动画 */
        .stats {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2.5rem;
            margin-top: 6rem;
        }

        .stat-item {
            text-align: center;
            padding: 2.5rem 1.5rem;
            background: rgba(5, 10, 48, 0.5);
            border: 1px solid rgba(8, 217, 214, 0.1);
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            overflow: hidden;
        }

        .stat-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--primary), var(--secondary));
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease;
        }

        .stat-item:hover {
            transform: translateY(-15px) scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            border-color: rgba(8, 217, 214, 0.3);
        }

        .stat-item:hover::before {
            transform: scaleX(1);
        }

        .stat-item i {
            font-size: 3rem;
            color: var(--secondary);
            margin-bottom: 1.5rem;
            text-shadow: var(--glow);
            transition: all 0.3s ease;
        }

        .stat-item:hover i {
            transform: scale(1.2) rotate(10deg);
            color: var(--primary);
            text-shadow: var(--glow-primary);
        }

        .stat-item h3 {
            font-size: 3rem;
            color: var(--accent);
            margin-bottom: 0.8rem;
            font-weight: 800;
        }

        .stat-item p {
            color: var(--accent);
            opacity: 0.8;
            font-size: 1.1rem;
        }

        /* Missions Section */
        .missions {
            background: linear-gradient(180deg, var(--dark), var(--darker));
            position: relative;
        }

        .missions::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(180deg, var(--dark), transparent);
        }

        .missions-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
        }

        .mission-card {
            background: rgba(5, 10, 48, 0.3);
            border: 1px solid rgba(8, 217, 214, 0.1);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
            transform-style: preserve-3d;
        }

        .mission-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
        }

        .mission-card:hover {
            transform: translateY(-20px) rotateX(5deg);
            box-shadow: 0 30px 50px rgba(0, 0, 0, 0.5);
            border-color: rgba(8, 217, 214, 0.3);
        }

        .mission-card:hover::before {
            opacity: 0.1;
        }

        .mission-img {
            height: 220px;
            overflow: hidden;
            position: relative;
        }

        .mission-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .mission-card:hover .mission-img img {
            transform: scale(1.2) rotate(5deg);
        }

        .mission-badge {
            position: absolute;
            top: 20px;
            right: 20px;
            background: var(--primary);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 600;
            z-index: 2;
            box-shadow: var(--glow-primary);
        }

        .mission-content {
            padding: 2rem;
            position: relative;
            z-index: 2;
        }

        .mission-content h3 {
            font-size: 1.8rem;
            margin-bottom: 1.2rem;
            color: var(--secondary);
            text-shadow: var(--glow);
        }

        .mission-content p {
            margin-bottom: 1.8rem;
            opacity: 0.8;
        }

        /* CTA Section */
        .cta {
            position: relative;
            padding: 10rem 0;
            overflow: hidden;
        }

        .cta::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://images.unsplash.com/photo-1538385309784-01e5b009765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover no-repeat;
            opacity: 0.1;
            z-index: -1;
        }

        .cta::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, rgba(255, 46, 99, 0.2), transparent 70%),
                        radial-gradient(circle at 30% 70%, rgba(8, 217, 214, 0.2), transparent 60%);
            z-index: -1;
        }

        .cta-content {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .cta h2 {
            font-size: 3.5rem;
            margin-bottom: 2rem;
            background: linear-gradient(90deg, var(--secondary), var(--primary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: var(--glow);
        }

        .cta p {
            font-size: 1.3rem;
            margin-bottom: 3rem;
            opacity: 0.9;
        }

        .cta .btn {
            padding: 1.2rem 3rem;
            font-size: 1.2rem;
            margin: 0 10px;
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--secondary);
            box-shadow: var(--glow);
            color: var(--secondary);
        }

        .btn-outline:hover {
            background: rgba(8, 217, 214, 0.1);
            color: white;
        }

        /* Footer */
        footer {
            background-color: var(--darker);
            color: var(--accent);
            padding: 8rem 0 3rem;
            position: relative;
            border-top: 1px solid rgba(8, 217, 214, 0.1);
        }

        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, var(--secondary), transparent);
            box-shadow: var(--glow);
        }

        .footer-content {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: 4rem;
            margin-bottom: 5rem;
        }

        .footer-column h3 {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            position: relative;
            padding-bottom: 15px;
            color: var(--secondary);
            text-shadow: var(--glow);
        }

        .footer-column h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background: linear-gradient(90deg, var(--secondary), var(--primary));
            box-shadow: var(--glow);
        }

        .footer-column p {
            margin-bottom: 1.5rem;
            opacity: 0.8;
            line-height: 1.8;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 1.2rem;
        }

        .footer-links li a {
            color: var(--accent);
            text-decoration: none;
            transition: all 0.3s ease;
            opacity: 0.8;
            display: inline-block;
        }

        .footer-links li a:hover {
            color: var(--primary);
            padding-left: 8px;
            opacity: 1;
            text-shadow: var(--glow-primary);
        }

        .social-links {
            display: flex;
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background-color: rgba(5, 10, 48, 0.5);
            border: 1px solid rgba(8, 217, 214, 0.2);
            border-radius: 50%;
            color: var(--accent);
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-size: 1.2rem;
        }

        .social-links a:hover {
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            transform: translateY(-10px) rotate(10deg);
            box-shadow: var(--glow);
            border-color: transparent;
            color: white;
        }

        .copyright {
            text-align: center;
            padding-top: 3rem;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            opacity: 0.6;
        }

        .mobile-menu {
            display: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: var(--secondary);
            text-shadow: var(--glow);
            z-index: 100;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
            .about-content {
                gap: 3rem;
            }
            
            .missions-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .footer-content {
                grid-template-columns: 1fr 1fr;
                gap: 3rem;
            }
        }

        @media (max-width: 992px) {
            .hero h1 {
                font-size: 3.5rem;
            }
            
            .stats {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .cta h2 {
                font-size: 3rem;
            }
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.8rem;
            }
            
            .hero p {
                font-size: 1.2rem;
            }
            
            nav ul {
                display: none;
                position: fixed;
                top: 0;
                right: 0;
                width: 80%;
                height: 100vh;
                background: linear-gradient(180deg, var(--darker), var(--dark));
                flex-direction: column;
                padding: 8rem 2rem 2rem;
                text-align: right;
                box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
                z-index: 99;
            }
            
            nav ul.active {
                display: flex;
                animation: slideIn 0.5s ease-out;
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
            }
            
            nav ul li {
                margin: 0 0 1.5rem 0;
                padding: 0;
            }
            
            .mobile-menu {
                display: block;
            }
            
            .about-content {
                grid-template-columns: 1fr;
            }
            
            .missions-grid {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
            }
            
            .stats {
                grid-template-columns: 1fr;
            }
            
            .cta h2 {
                font-size: 2.5rem;
            }
            
            .cta .btn {
                display: block;
                margin: 15px auto;
            }
        }

        /* Counter animation */
        .counter {
            transition: all 0.5s ease;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--dark);
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, var(--secondary), var(--primary));
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            box-shadow: var(--glow);
        }
    </style>
</head>
<body>
    <!-- Particle background -->
    <div id="particles-js"></div>

    <!-- Header -->
    <header>
        <div class="container nav-container">
            <div class="logo">
                <i class="fas fa-rocket"></i>
                <span>MOONX</span>
            </div>
            <nav>
                <div class="mobile-menu">
                    <i class="fas fa-bars"></i>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#missions">Missions</a></li>
                    <li><a href="#join">Join</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section with炫酷前景图 -->
    <section class="hero" id="home">
        <div class="hero-foreground">
            <div class="foreground-element"></div>
            <div class="foreground-element"></div>
            <div class="foreground-element"></div>
        </div>
        <div class="container hero-content">
            <h1>REDEFINE HUMANITY'S LUNAR FUTURE</h1>
            <p>We're not just exploring the moon – we're conquering it. Radical innovation, uncompromising ambition, and a mission to establish permanent lunar dominance.</p>
            <a href="#missions" class="btn">LAUNCH MISSION</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <div class="section-title">
                <h2>OUR RADICAL VISION</h2>
                <p>We're shattering the limits of lunar exploration with technology that defies convention and a mindset that refuses to accept "impossible."</p>
            </div>
            <div class="about-content">
                <div class="about-img">
                    <img src="https://images.unsplash.com/photo-1623687222706-4618e1b09a0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Lunar mission control">
                </div>
                <div class="about-text">
                    <h3>WE DON'T FOLLOW - WE PIONEER</h3>
                    <p>MOONX was born from a refusal to accept the slow pace of traditional space exploration. Founded in 2020 by a team of renegade scientists and engineers, we're rewriting the rules of lunar discovery.</p>
                    <p>Our approach is unapologetically aggressive: we test boundaries, embrace risk, and deliver results that shock the aerospace establishment. We don't wait for permission – we launch first and answer questions later.</p>
                    <p>By 2030, we'll have a fully operational lunar colony, mining operations, and the first off-Earth manufacturing facilities. This isn't science fiction – this is our timeline.</p>
                    <a href="#" class="btn">DISRUPT NOW</a>
                </div>
            </div>
            <div class="stats">
                <div class="stat-item">
                    <i class="fas fa-fire"></i>
                    <h3 class="counter" data-target="12">0</h3>
                    <p>UNMANNED MISSIONS</p>
                </div>
                <div class="stat-item">
                    <i class="fas fa-user-astronaut"></i>
                    <h3 class="counter" data-target="27">0</h3>
                    <p>LUNAR ASTRONAUTS</p>
                </div>
                <div class="stat-item">
                    <i class="fas fa-meteor"></i>
                    <h3 class="counter" data-target="780">0</h3>
                    <p>TECH BREAKTHROUGHS</p>
                </div>
                <div class="stat-item">
                    <i class="fas fa-industry"></i>
                    <h3 class="counter" data-target="5">0</h3>
                    <p>LUNAR BASES (2030)</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Missions Section -->
    <section class="missions" id="missions">
        <div class="container">
            <div class="section-title">
                <h2>OUR RADICAL MISSIONS</h2>
                <p>These aren't just space flights – they're declarations of intent. Each mission pushes further than anyone thought possible.</p>
            </div>
            <div class="missions-grid">
                <div class="mission-card">
                    <div class="mission-img">
                        <img src="https://images.unsplash.com/photo-1596441861070-5f8861a55595?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Lunar Orbiter">
                        <div class="mission-badge">ACTIVE</div>
                    </div>
                    <div class="mission-content">
                        <h3>RAIDER 7</h3>
                        <p>Our most aggressive lunar orbiter yet, equipped with experimental drilling technology to extract subsurface samples while in low orbit – a technique deemed impossible by traditional agencies.</p>
                        <a href="#" class="btn">MISSION DATA</a>
                    </div>
                </div>
                <div class="mission-card">
                    <div class="mission-img">
                        <img src="https://images.unsplash.com/photo-1618477013384-142e85a83c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Moon Lander">
                        <div class="mission-badge">LAUNCHING</div>
                    </div>
                    <div class="mission-content">
                        <h3>FORGE X1</h3>
                        <p>The first lunar foundry mission – deploying autonomous 3D printers that use lunar regolith to construct structures. This isn't just exploration – it's colonization.</p>
                        <a href="#" class="btn">PRE-LAUNCH</a>
                    </div>
                </div>
                <div class="mission-card">
                    <div class="mission-img">
                        <img src="https://images.unsplash.com/photo-1598726661167-5a4740a374e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Lunar Base">
                        <div class="mission-badge">AMBITION</div>
                    </div>
                    <div class="mission-content">
                        <h3>OUTPOST ZERO</h3>
                        <p>Our audacious plan to establish the first permanent human colony on the moon by 2028 – two years ahead of every other program. No compromises, no delays.</p>
                        <a href="#" class="btn">PROJECT DETAILS</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta" id="join">
        <div class="container cta-content">
            <h2>STOP WATCHING HISTORY – MAKE IT</h2>
            <p>We're looking for radicals, disruptors, and visionaries who refuse to accept the status quo. If you're ready to push beyond every limit, join our team.</p>
            <a href="#" class="btn">JOIN THE REVOLUTION</a>
            <a href="#" class="btn btn-outline">VIEW OPPORTUNITIES</a>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>MOONX</h3>
                    <p>We're not just going to the moon – we're taking it. Redefining humanity's relationship with space through radical innovation and uncompromising ambition.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>NAVIGATE</h3>
                    <ul class="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Our Vision</a></li>
                        <li><a href="#missions">Missions</a></li>
                        <li><a href="#join">Careers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>TECHNOLOGIES</h3>
                    <ul class="footer-links">
                        <li><a href="#">Lunar Mining</a></li>
                        <li><a href="#">Regolith Construction</a></li>
                        <li><a href="#">Space Propulsion</a></li>
                        <li><a href="#">Life Support Systems</a></li>
                        <li><a href="#">Autonomous Robotics</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>CONTACT</h3>
                    <p><i class="fas fa-map-marker-alt"></i> 100 Launch Pad, Mars District</p>
                    <p><i class="fas fa-phone"></i> +1 (555) 133-7133</p>
                    <p><i class="fas fa-envelope"></i> disrupt@moonx.space</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 MOONX. We don't just explore – we conquer.</p>
            </div>
        </div>
    </footer>

    <!-- Particles.js library -->
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script>
        // Initialize particle background
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: ["#08d9d6", "#ff2e63"] },
                shape: { type: "circle" },
                opacity: { 
                    value: 0.5, 
                    random: true, 
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } 
                },
                size: { 
                    value: 3, 
                    random: true, 
                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false } 
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#08d9d6",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.5 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });

        // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('active');
            this.innerHTML = document.querySelector('nav ul').classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Counter Animation with more激进效果
        function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            const speed = 150; // Faster animation
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                
                // More aggressive increment
                const inc = target / speed * 2;
                
                if(count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    // Add color pulse effect during animation
                    counter.style.textShadow = `var(--glow-primary)`;
                    counter.style.color = `var(--primary)`;
                    setTimeout(animateCounters, 20);
                } else {
                    counter.innerText = target;
                    // Reset to normal style
                    counter.style.textShadow = `none`;
                    counter.style.color = `var(--accent)`;
                }
            });
        }

        // Intersection Observer for counter animation
        const statsSection = document.querySelector('.stats');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);

        // Smooth scrolling with more激进效果
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Close mobile menu if open
                    const navUl = document.querySelector('nav ul');
                    if(navUl.classList.contains('active')) {
                        navUl.classList.remove('active');
                        document.querySelector('.mobile-menu').innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                header.style.boxShadow = '0 0 20px rgba(8, 217, 214, 0.1)';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
            }
        });
    </script>
</body>

</html>
