import { motion } from "framer-motion";
import { Loader } from "lucide-react";

export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[200px] gap-3">
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
			>
				<Loader className="w-10 h-10 text-primary animate-spin" />
			</motion.div>
			<p className="text-sm text-muted-foreground">Loading, please wait...</p>
		</div>
	);
}