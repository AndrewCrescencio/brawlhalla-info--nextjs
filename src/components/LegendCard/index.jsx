import Image from "next/image";
import { Card, ImageContainer, LegendName } from "./styles";

export const LegendCard = ({ bio_name, legend_image, legend_id }) => {
  return (
    <Card href={`/legends/${legend_id}`}>
      <ImageContainer>
        <Image
          src={legend_image}
          alt={bio_name}
          className="legend-image"
          fill
          sizes="(max-width: 768px) 80px,
          144px"
        />
      </ImageContainer>
      <LegendName>{bio_name}</LegendName>
    </Card>
  );
};
