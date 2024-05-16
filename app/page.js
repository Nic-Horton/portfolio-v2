import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import EmailSection from './components/EmailSection/EmailSection';
import Footer from './components/Footer/Footer';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<Navbar />
			<div className="container mt-28 mx-auto px-12 py-4">
				<HeroSection />
				<AboutSection />
				<ProjectSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
}
