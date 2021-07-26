import React from "react";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../../components/spacer/spacer.component";
import { TypographyText } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
} from "./restaurants-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    photos = [
      "https://v-kurse.ru/wp-content/uploads/2021/06/spo-10-595f5741cab2a.jpg",
    ],
    address = "100 Some Random Street",
    isOpenNow = true,
    rating = 3.7,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <TypographyText variant="label"> {name} </TypographyText>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <TypographyText variant="error">CLOSED</TypographyText>
            )}
            <Spacer variant="right.large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </SectionEnd>
        </Section>
        <Address> {address}</Address>
      </Info>
    </RestaurantCard>
  );
};
