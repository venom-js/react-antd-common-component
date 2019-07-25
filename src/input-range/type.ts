export interface InputRangeProps {
  value?: any[];
  onChange?: (value: any[]) => void;
  min?: number;
  placeholders?: string[];
  style?: React.CSSProperties;
  separator?: string;
}
