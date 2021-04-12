import { useWindowSize } from './useWindowSize';
import { styles } from './styles';

const PREVIEW_WIDTH = 200;

export default function Chapter22() {
  const [screenWidth, screenHeight] = useWindowSize();

  // checking if screenWidth is > 0 to avoid previewHeight === NaN
  const previewHeight = screenWidth
    ? (PREVIEW_WIDTH * screenHeight) / screenWidth
    : 0;

  return (
    <>
      <h2>Chapter 22: useWindowSize</h2>
      <div style={styles.preview(PREVIEW_WIDTH, previewHeight)}>
        <div style={styles.widthText(PREVIEW_WIDTH)}>{screenWidth}px</div>
        <div style={styles.heightText(previewHeight)}>{screenHeight}px</div>
      </div>
    </>
  );
}
