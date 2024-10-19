import React from 'react';
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import ListDivider from '@mui/joy/ListDivider';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import TableFiles from './TableFiles'; // Assuming TableFiles is a separate component
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

const FilesDisplaySheet: React.FC = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />

      {/* First Sheet for large screens */}
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: 'sm',
          gridColumn: '1/-1',
          display: { xs: 'none', md: 'flex' },
          height: '100%', // Ensures full height on large screens
        }}
      >
        <TableFiles />
      </Sheet>

      {/* Second Sheet for small screens */}
      <Sheet
        variant="outlined"
        sx={{
          display: { xs: 'inherit', sm: 'none' },
          borderRadius: 'sm',
          height: '100%', // Ensures full height on small screens
          overflow: 'auto', // Allows scrolling if content overflows
          backgroundColor: 'background.surface',
          '& > *': {
            '&:nth-child(n):not(:nth-last-child(-n+4))': {
              borderBottom: '1px solid',
              borderColor: 'divider',
            },
          },
        }}
      >
        <List
          size="sm"
          aria-labelledby="table-in-list"
          sx={{
            flex: 1, // Ensures the list fills the available space
            overflow: 'auto', // Enables scrolling for the list
          }}
        >
          <ListItem>
            <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
              <ListItemContent sx={{ p: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography
                    level="title-sm"
                    startDecorator={<FolderRoundedIcon color="primary" />}
                    sx={{ alignItems: 'flex-start' }}
                  >
                    Case 1
                  </Typography>
                  <AvatarGroup
                    size="sm"
                    sx={{
                      '--AvatarGroup-gap': '-8px',
                      '--Avatar-size': '24px',
                    }}
                  >
                    <Avatar src="https://i.pravatar.cc/24?img=6" />
                    <Avatar src="https://i.pravatar.cc/24?img=7" />
                    <Avatar src="https://i.pravatar.cc/24?img=8" />
                    <Avatar src="https://i.pravatar.cc/24?img=9" />
                  </AvatarGroup>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Typography level="body-sm">987.5MB</Typography>
                  <Typography level="body-sm">21 Oct 2023, 3PM</Typography>
                </Box>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListDivider />
          {/* Repeat similar ListItem structures for more files */}
        </List>
      </Sheet>
    </CssVarsProvider>
  );
};

export default FilesDisplaySheet;