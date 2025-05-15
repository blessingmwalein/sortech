import Image from "next/image";

interface CategoryCardProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
}

export const CategoryCard = ({
    title,
    description,
    imageUrl,
    imageAlt = "Feature Image",
}: CategoryCardProps) => {
    return (
        <div className="text-center">
            <div className="mb-4 relative h-[300px] rounded-[25px] overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                />
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
        </div>
    );
};
