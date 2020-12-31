export declare type PaneType = 'technicalIndicator'

export declare interface PaneOptions {
  technicalIndicatorType?: string;
  height?: number;
  dragEnabled?: boolean;
}

export declare interface KLineData {
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  timestamp: number;
  turnover?: number;
}

export declare type PictureType = 'png' | 'jpeg' | 'bmp';

export declare type PlotType = 'circle' | 'bar' | 'line';

export declare interface TechnicalIndicatorInfoPlot {
  key: string;
  title?: string;
  type?: PlotType;
  color?: (data: any, options?: any) => string;
  isStroke?: (data: any) => boolean;
}

export declare interface OverrideTechnicalIndicatorInfo {
  name: string;
  calcParams?: number[];
  precision?: number;
  styles?: any;
}

export declare interface TechnicalIndicatorInfo extends OverrideTechnicalIndicatorInfo {
  calcTechnicalIndicator: (kLineDataList: KLineData[], calcParams: number[], plots: TechnicalIndicatorInfoPlot[]) => any[];
  series?: 'price' | 'volume' | 'normal'
  plots?: TechnicalIndicatorInfoPlot[];
  shouldCheckParamCount?: boolean;
  shouldOhlc?: boolean;
  shouldFormatBigNumber?: boolean,
  baseValue?: number;
  minValue?: number;
  maxValue?: number;
  regeneratePlots?: (calcParams: number[]) => TechnicalIndicatorInfoPlot[];
  render?: (
    ctx: CanvasRenderingContext2D,
    dataSource: any,
    viewport: any,
    styleOptions: any,
    xAxisConvert: any,
    yAxisConvert: any,
    isCandleTechnicalIndicator: boolean
  ) => void
}

export declare type DrawActionType = 'drawCandle' | 'drawTechnicalIndicator'

export declare interface DrawActionCallbackParams {
  ctx: CanvasRenderingContext2D;
  kLineData: KLineData;
  dataIndex: number;
  technicalIndicatorData?: any
  technicalIndicatorType?: string
  coordinate: any;
  barSpace: number;
  halfBarSpace: number;
  isCandle: boolean;
}

export declare interface Chart {
  setStyleOptions(options: any): void;
  getStyleOptions(): any;
  overrideTechnicalIndicator(override: OverrideTechnicalIndicatorInfo): void;
  getTechnicalIndicatorInfo(technicalIndicatorType?: string): any;
  setPriceVolumePrecision(pricePrecision: number, volumePrecision: number): void;
  setTechnicalIndicatorPrecision(precision: number, technicalIndicatorType?: string): void;
  setTimezone(timezone: string): void;
  getTimezone(): string;
  resize(): void;
  setZoomEnabled(enabled: boolean): void;
  isZoomEnabled(): boolean;
  setScrollEnabled(enabled: boolean): void;
  isScrollEnabled(): boolean;
  setOffsetRightSpace(space: number): void;
  setLeftMinVisibleBarCount(barCount: number): void;
  setRightMinVisibleBarCount(barCount: number): void;
  setDataSpace(space: number): void;
  clearData(): void;
  getDataList(): KLineData[];
  applyNewData(dataList: KLineData[], more?: boolean): void;
  applyMoreData(dataList: KLineData[], more?: boolean): void;
  updateData(data: KLineData): void;
  loadMore(cb: (timestamp: number) => void): void;
  setTechnicalIndicatorType(technicalIndicatorType: string, isStack?: boolean, paneId?: string): void;
  getTechnicalIndicatorType(paneId?: string): string[];
  createPane(type?: PaneType, options?: PaneOptions): string | null;
  addCustomTechnicalIndicator(technicalIndicatorInfo: TechnicalIndicatorInfo): void;
  removeTechnicalIndicator(technicalIndicatorType?: string, paneId?: string): void;
  addGraphicMark(graphicMarkType: string): void;
  removeAllGraphicMark(): void;
  subscribeDrawAction (type: DrawActionType, callback: (params: DrawActionCallbackParams) => void): void;
  unsubscribeDrawAction (type: DrawActionType, callback: (params: DrawActionCallbackParams) => void): void;
  getConvertPictureUrl(includeFloatLayer?: boolean, includeGraphicMark?: boolean, type?: PictureType, backgroundColor?: string): string;
}

export declare function version(): string;

export declare function init(ds: HTMLDivElement | string, style?: any): Chart|null;

export declare function dispose(dcs: HTMLDivElement | Chart | string): void;
