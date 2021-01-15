import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

export function a11yProps(index, id) {
  return {
    id: `${id}-tab-${index}`,
    'aria-controls': `${id}-tabpanel-${index}`,
  };
}

/* eslint-disable-next-line */
export interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
  id: string;
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, id, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default TabPanel;
