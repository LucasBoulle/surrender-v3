import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

export const PlayerMatchCardContainer = styled.div`
  border-radius: 15px;
  background: ${Colors.background};
  width: 440px;
  height: 110px;
  display: flex;
  flex-direction: row;
  margin: 10px;
`

export const ItemPurchased = styled.img`
  border: 1px solid;  
  border-radius: 5px;
  border-image-width: 5px;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  margin-right: 5px;
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50%;
`

export const LeftPlayerMatchCardContainer =  styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding-right: 15px;
  align-items: flex-end;
`

export const LeftPlayerMatchCardRowContainer =  styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  align-items: flex-end;
  padding-right: 15px;
`

export const RightPlayerMatchCardContainer =  styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-start;
  padding-left: 15px;
`

export const RightPlayerMatchCardRowContainer =  styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  padding-left: 15px;
`

export const InfoTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
`
export const InfoText = styled.p`
  font-size: 14px;
`
export const ChampionIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
`
