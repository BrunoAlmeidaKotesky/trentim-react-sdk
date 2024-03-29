
export function loadCSS() {
    if(!location.href.toLowerCase().includes('sharepoint')) return;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
        .lifecycle *, .lifecycle {
            box-sizing: border-box;
    }
        .lifecycle {
            display: grid;
            grid-template-columns: 200px minmax(160px, 1fr);
            grid-gap: 0;
            gap: 0;
            align-content: end;
            align-items: end;
            width: 100%;
            position: relative;
            font-family: "Segoe UI", sans-serif;
    }
        .projectLifecycle {
            display: flex;
            flex-direction: column;
            width: 200px;
            height: 42px;
            margin-top: auto;
            color: #fff;
            background-color: var(--lifecycle-left-col-color);
            padding-left: 14px;
            font-size: 14px;
            text-align: left;
    }
        .projectLifecycle .columnTitle {
            font-weight: 600;
            line-height: 24px;
    }
        .projectLifecycle .columnSubTitle {
            line-height: 1;
    }
        .lifecycleContainer {
            display: flex;
            width: 100%;
            height: 56px;
            align-items: flex-end;
            position: relative;
    }
        .btnLifecycleScroll {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--lifecycle-button-color);
            height: 42px;
            position: absolute;
            z-index: 1001;
            width: 24px;
    }
        .btnLifecycleScroll:hover {
            cursor: pointer;
    }
        .scrollLeft {
            left: 0;
    }
        .scrollRight {
            right: 0;
    }
        .lifecycleTrackContainer {
            overflow: hidden;
            width: calc(100% - 48px);
            margin: 0 auto;
    }
        .lifecycleTrack {
            display: grid;
            width: 100%;
            overflow: overlay;
            padding: 10px 0 20px;
            margin-bottom: -20px;
            grid-template-columns: repeat(var(--lifecycle-grid-row-number), 1fr);
    }
    /* Lifecycle tile */
        .tile {
            display: flex;
            flex: 1 1 100%;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            height: 42px;
            border-top: 4px solid #e2e2e2;
            position: relative;
            background-color: #efefef;
            padding: 0 1rem;
    }
        .tile.start:after {
            content: '';
            height: 4px;
            background-color: #c4c4c4;
            width: 50%;
            position: absolute;
            right: 0;
            top: -4px;
    }
        .tile.middle:before {
            content: '';
            height: 4px;
            background-color: #c4c4c4;
            width: 50%;
            position: absolute;
            left: 0;
            top: -4px;
    }
        .tile.middle:after {
            content: '';
            height: 4px;
            background-color: #c4c4c4;
            width: 50%;
            position: absolute;
            right: 0;
            top: -4px;
    }
        .tile.end:before {
            content: '';
            height: 4px;
            background-color: #c4c4c4;
            width: 50%;
            position: absolute;
            left: 0;
            top: -4px;
    }
        .tile.active .tileTitle {
            font-weight: 600;
    }
        .tile.active .stageIndicator {
            border-color: var(--lifecycle-color);
    }
        .tile.active .stageIndicator:after {
            content: '';
            height: 8px;
            width: 8px;
            border-radius: 8px;
            background-color: var(--lifecycle-color);
            position: absolute;
            top: calc(50% - 4px);
            left: calc(50% - 4px);
    }
        .tile.start.completed:after {
            background-color: var(--lifecycle-color);
    }
        .tile.completed .stageIndicator {
            border: none;
            background-color: var(--lifecycle-color);
            color: #fff;
            justify-content: center;
            align-items: center;
    }
        .tile.middle.active:before, .tile.end.active:before {
            background-color: var(--lifecycle-color);
    }
        .tile.end.completed::before {
            background-color: var(--lifecycle-color);
    }
        .tile.middle.completed:before, .tile.middle.completed:after {
            background-color: var(--lifecycle-color);
    }
        .tileTitle {
            font-size: 14px;
            line-height: 30px;
            color: black;
            width: 100%;
            white-space: nowrap;
    }
        @media screen and (max-width: 430px) {
            .tileTitle {
                width: 100px;
                text-overflow: ellipsis;
                overflow: hidden;
        }
    }
        .stageIndicator {
            display: flex;
            width: 24px;
            height: 24px;
            border-radius: 24px;
            background-color: #fff;
            border: 4px solid #c4c4c4;
            position: absolute;
            top: -14px;
            left: calc(50% - 14px);
            z-index: 2;
    }
        .titleArea {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            height: 100%;
            width: 100%;
            text-align: center;
    }
        .titleArea:hover {
            background-color: #dfdfdf;
            cursor: pointer;
    }`;
    document.head.appendChild(styleTag);
}