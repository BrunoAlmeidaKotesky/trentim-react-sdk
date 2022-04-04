import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { IInfoCardProps } from '../models/interfaces/IInfoCardProps';
import { CSSProperties } from 'react';

const InfoCard = React.memo((props: IInfoCardProps) => {
    const styles: Record<string, CSSProperties> = {
        card: {
            backgroundColor: "rgb(255, 255, 255)",
            border: "1px solid #ababab",
            margin: "0 0 16px",
            borderRadius: "4px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: props?.width || "100%",
            height: props?.height || "150px",
            userSelect: props?.enableUserSelect ? "unset" : "none",
            color: "#333",
            overflow: "hidden"
        },
        top: {
            borderBottom: "1px solid rgb(237, 235, 233)",
            overflow: "hidden",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 120px",
            columnGap: "8px",
            padding: "16px",
            fontFamily: `"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif`
        },
        col: { display: "flex", flexDirection: "column" },
        rightCol: { display: 'flex', flexDirection: 'column', alignItems: "flex-end" },
        leftCol: { display: 'flex', flexDirection: 'column' },
        cardTitle: {
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            fontSize: "18px",
            lineHeight: 1.4
        },
        projectCode: {
            fontSize: "16px",
            opacity: 0.8
        },
        bottom: {
            display: "flex",
            padding: "6px 16px",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "rgb(250, 249, 248)",
            fontFamily: `"Segoe UI", "Segoe UI Web (West European)", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif`

        },
        circleWrap: { display: "inline-flex", alignItems: "center" },
        circle: {
            width: "16px",
            height: "16px",
            background: "#06ad51",
            borderRadius: "50%",
            border: "1px solid #06ad51",
            display: "inline-block"
        },
        status: { display: "inline-block", marginLeft: "8px" },
        linkButton: { width: "32px", height: "32px", minWidth: "32px" }
    }


    return (
        <div onClick={(e) => {
            if (props.onCardClick)
                props?.onCardClick(e);
        }} style={styles.card}>
            <div data-class-name="card-top" style={styles.top}>
                <div data-class-name="card-top-left" style={styles.leftCol}>
                    <div style={styles.cardTitle}>
                        <span>{props?.cardTitle}</span>
                    </div>
                    <div style={styles.projectCode}>
                        <span>{props?.cardSubtitle}</span>
                    </div>
                </div>
                <div data-class-name="card-top-right" style={props?.cardRightColInformation?.containerStyle ?? styles.rightCol}>
                    {props?.cardRightColInformation?.values?.length > 0 && props?.cardRightColInformation?.values.map(value => (
                        <div style={value?.style ?? styles.plantName}>
                            <span>{value?.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div data-class-name="card-bottom" style={styles.bottom}>
                <div data-class-name="card-circle-wrapper" style={styles.circleWrap}>
                    <div style={props?.circleIndicator?.color ? { ...styles.circle, background: props?.circleIndicator?.color, border: `1px solid ${props?.circleIndicator?.color}` } : {}}></div>
                    <span style={styles.status}>{props?.circleIndicator?.title}</span>
                </div>
                <div data-class-name="card-button-container">
                    <PrimaryButton onClick={props?.onClickDownButton} style={styles.linkButton} iconProps={{ iconName: props?.iconName || 'Page' }} />
                </div>
            </div>
        </div>
    );
});

export default InfoCard;