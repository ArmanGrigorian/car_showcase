import { CardImageProps } from "@/types";
import Image from "next/image";



const CardImage = ({ year, make, model }: CardImageProps) => {
	return (
		<div className="relative w-full h-40 my-3 object-contain">
			<Image
				className="object-contain"
				src="/images/hero.png"
				fill
				priority
				alt={`${year} ${make} ${model} image`}
			/>
		</div>
	);
};

export { CardImage };
