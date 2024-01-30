import React from 'react';
import Tooltip from '@uiw/react-tooltip';
import HeatMap from '@uiw/react-heat-map';

const value = [
    { date: '2016/01/11', count:2 },
    { date: '2016/04/12', count:2 },
    { date: '2016/05/01', count:5 },
    { date: '2016/05/02', count:5 },
    { date: '2016/05/03', count:1 },
    { date: '2016/05/04', count:11 },
    { date: '2016/05/08', count:32 },
  ];

  const DataMap = () => {
    return (
      <div style={{ position: 'relative' }}>
        {/* Parent container with position: relative */}
        <HeatMap
          value={value}
          width={680}
          startDate={new Date('2016/01/01')}
          rectRender={(props, data) => (
            <Tooltip placement='top' content={`count: ${data.count || 0}`}>
              {/* Tooltip positioned absolutely within the parent container */}
              <rect {...props} />
            </Tooltip>
          )}
        />
      </div>
    );
  };
  
  export default DataMap;