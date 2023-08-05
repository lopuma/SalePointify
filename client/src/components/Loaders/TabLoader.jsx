import ContentLoader from 'react-content-loader'

const TabLoader = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={500}
    viewBox="0 0 350 500"
    backgroundColor="#b3b3b3"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <rect x="67" y="207" rx="0" ry="0" width="3" height="0" />
    <rect x="-1" y="26" rx="0" ry="0" width="0" height="2" />
    <rect x="2" y="1" rx="4" ry="4" width="331" height="42" />
    <rect x="3" y="55" rx="4" ry="4" width="213" height="38" />
    <rect x="233" y="63" rx="4" ry="4" width="98" height="19" />
    <rect x="4" y="111" rx="4" ry="4" width="327" height="307" />
    <rect x="3" y="429" rx="5" ry="5" width="329" height="47" />
  </ContentLoader>
)

export default TabLoader
