import styled from "styled-components"

export const StickerCardContainer = styled.div`
    font-size: 14px;
    vertical-align: middle;
    box-shadow: 2px 4px 10px -5px rgba(0,0,0,.08);
    border: 1px solid #efefef;
    border-radius: 4px;
`;

export const StickerCardItem = styled.div<{cardBgColor?: string}>`
    height: calc(100% - 20px);
    position: relative;
    padding: 0px;
    border-radius: 3px 3px 0px 0px;
    background-color: ${({cardBgColor}) => cardBgColor ?? '#fff'};
`;

export const CardItemWrapper = styled.div`
    padding: 12px;
    height: calc(100% - 40px);
    overflow: auto;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ddd;
        border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #ccc;
    }
`;

export const CardStickerWrapper = styled.div<{stickerBgColor?: string}>`
    background-color: ${({stickerBgColor}) => stickerBgColor ?? '#feffb7'};
	padding: 10px;
	color: black;
	margin: 0 0 8px;
	font-size: 11px;
    border-radius: 4px;
    min-height: 44px;
    position: relative;

    & > div[class^='transparent'] {
        position: absolute;
        z-index: 9999;
        right: 10px;
        width: 44px;
  }
`;