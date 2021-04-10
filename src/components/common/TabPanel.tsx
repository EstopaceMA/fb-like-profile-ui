
import { ReactNode } from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: ReactNode;
    index: any;
    value: any;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Container>
                <Box style={{ marginTop: 12 }}>
                    {children}
                </Box>
            </Container>
        )}
        </div>
    );
}

export default TabPanel;