import { ExportType } from './export-type';
import { Mime } from './mime';
import { InjectionToken } from '@angular/core';
export const MAT_TABLE_EXPORTER = 'mat-table-exporter';
export const TYPE_ARRAY = 'array';
export const CHAR_SET_UTF = ';charset=utf-';
export const CHAR_SET_UTF_8 = CHAR_SET_UTF + '8';
export const CONTENT_TYPE_TEXT = ExportType.TXT + '/';
export const CONTENT_TYPE_APPLICATION = 'application/';
export const CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + 'octet-stream';
export const DOT = '.';
export const COMMA = ',';
export const EXTENSION_XLS = DOT + ExportType.XLS;
export const EXTENSION_XLSX = DOT + ExportType.XLSX;
export const EXTENSION_CSV = DOT + ExportType.CSV;
export const EXTENSION_JSON = DOT + ExportType.JSON;
export const EXTENSION_TEXT = DOT + ExportType.TXT;
export const MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
export const MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
export const MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
export const MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_8);
export const MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
export const REF = '!ref';
export const XLS_REGEX = DOT + '*\.' + ExportType.XLS + '$';
export const RETURN = '\n';
export const TAB = '\t';
export const XLSX_COLS = '!cols';
export const BOM = '\uFEFF';
export const XLSX_LIGHTWEIGHT = new InjectionToken('XLSX_LIGHTWEIGHT');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IkQ6L2FuZ3VsYXJfd29ya3NwYWNlL25nLW1hdGVyaWFsLWV4dGVuc2lvbnMvcHJvamVjdHMvY2RrLXRhYmxlLWV4cG9ydGVyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7QUFDdkQsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQztBQUNsQyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxZQUFZLEdBQUcsR0FBRyxDQUFDO0FBQ2pELE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3RELE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLGNBQWMsQ0FBQztBQUN2RCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyx3QkFBd0IsR0FBRyxjQUFjLENBQUM7QUFDNUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUNsRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDckQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQ25ELE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztBQUNyRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7QUFDcEQsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUMzRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxDQUFDO0FBQzdGLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLGNBQWMsQ0FBQyxDQUFDO0FBQzdGLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUN0RyxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDckcsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQztBQUMxQixNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1RCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDeEIsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUNqQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFVLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHBvcnRUeXBlIH0gZnJvbSAnLi9leHBvcnQtdHlwZSc7XHJcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuL21pbWUnO1xyXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVF9UQUJMRV9FWFBPUlRFUiA9ICdtYXQtdGFibGUtZXhwb3J0ZXInO1xyXG5leHBvcnQgY29uc3QgVFlQRV9BUlJBWSA9ICdhcnJheSc7XHJcbmV4cG9ydCBjb25zdCBDSEFSX1NFVF9VVEYgPSAnO2NoYXJzZXQ9dXRmLSc7XHJcbmV4cG9ydCBjb25zdCBDSEFSX1NFVF9VVEZfOCA9IENIQVJfU0VUX1VURiArICc4JztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9URVhUID0gRXhwb3J0VHlwZS5UWFQgKyAnLyc7XHJcbmV4cG9ydCBjb25zdCBDT05URU5UX1RZUEVfQVBQTElDQVRJT04gPSAnYXBwbGljYXRpb24vJztcclxuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9FWENFTCA9IENPTlRFTlRfVFlQRV9BUFBMSUNBVElPTiArICdvY3RldC1zdHJlYW0nO1xyXG5leHBvcnQgY29uc3QgRE9UID0gJy4nO1xyXG5leHBvcnQgY29uc3QgQ09NTUEgPSAnLCc7XHJcbmV4cG9ydCBjb25zdCBFWFRFTlNJT05fWExTID0gRE9UICsgRXhwb3J0VHlwZS5YTFM7XHJcbmV4cG9ydCBjb25zdCBFWFRFTlNJT05fWExTWCA9ICBET1QgKyBFeHBvcnRUeXBlLlhMU1g7XHJcbmV4cG9ydCBjb25zdCBFWFRFTlNJT05fQ1NWID0gIERPVCArIEV4cG9ydFR5cGUuQ1NWO1xyXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX0pTT04gPSAgRE9UICsgRXhwb3J0VHlwZS5KU09OO1xyXG5leHBvcnQgY29uc3QgRVhURU5TSU9OX1RFWFQgPSAgRE9UICsgRXhwb3J0VHlwZS5UWFQ7XHJcbmV4cG9ydCBjb25zdCBNSU1FX0VYQ0VMX1hMUyA9IG5ldyBNaW1lKEVYVEVOU0lPTl9YTFMsIENPTlRFTlRfVFlQRV9FWENFTCArIENIQVJfU0VUX1VURl84KTtcclxuZXhwb3J0IGNvbnN0IE1JTUVfRVhDRUxfWExTWCA9IG5ldyBNaW1lKEVYVEVOU0lPTl9YTFNYLCBDT05URU5UX1RZUEVfRVhDRUwgKyBDSEFSX1NFVF9VVEZfOCk7XHJcbmV4cG9ydCBjb25zdCBNSU1FX0pTT04gPSBuZXcgTWltZShFWFRFTlNJT05fSlNPTiwgQ09OVEVOVF9UWVBFX1RFWFQgKyBKU09OICsgQ0hBUl9TRVRfVVRGXzgpO1xyXG5leHBvcnQgY29uc3QgTUlNRV9UWFQgPSBuZXcgTWltZShFWFRFTlNJT05fVEVYVCwgQ09OVEVOVF9UWVBFX1RFWFQgKyBFeHBvcnRUeXBlLlRYVCArIENIQVJfU0VUX1VURl84KTtcclxuZXhwb3J0IGNvbnN0IE1JTUVfQ1NWID0gbmV3IE1pbWUoRVhURU5TSU9OX0NTViwgQ09OVEVOVF9UWVBFX1RFWFQgKyBFeHBvcnRUeXBlLkNTViArIENIQVJfU0VUX1VURl84KTtcclxuZXhwb3J0IGNvbnN0IFJFRiA9ICchcmVmJztcclxuZXhwb3J0IGNvbnN0IFhMU19SRUdFWCA9IERPVCArICcqXFwuJyArIEV4cG9ydFR5cGUuWExTICsgJyQnO1xyXG5leHBvcnQgY29uc3QgUkVUVVJOID0gJ1xcbic7XHJcbmV4cG9ydCBjb25zdCBUQUIgPSAnXFx0JztcclxuZXhwb3J0IGNvbnN0IFhMU1hfQ09MUyA9ICchY29scyc7XHJcbmV4cG9ydCBjb25zdCBCT00gPSAnXFx1RkVGRic7XHJcbmV4cG9ydCBjb25zdCBYTFNYX0xJR0hUV0VJR0hUID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCdYTFNYX0xJR0hUV0VJR0hUJyk7XHJcbiJdfQ==