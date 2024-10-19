import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import Stack from '@mui/joy/Stack';

import Chatbot from './components/Chatbot';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Header from './components/Header';
import FileDetailsSheet from './components/FileDetailsSheet';
import FilesDisplaySheet from './components/FilesDisplaySheet';
import DocumentListWithAvatars from './components/DocumentListWithAvatars';
import FileCard from './components/FileCard';

export default function FilesExample() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [navCollapsed, setNavCollapsed] = React.useState(false);

  const toggleNav = () => setNavCollapsed((prev) => !prev);

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}

      <Stack
        id="tab-bar"
        direction="row"
        spacing={1}
        sx={{
          justifyContent: 'space-around',
          display: { xs: 'flex', sm: 'none' },
          zIndex: '999',
          bottom: 0,
          position: 'fixed',
          width: '100dvw',
          py: 2,
          backgroundColor: 'background.body',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/joy-ui/getting-started/templates/email/"
          size="sm"
          startDecorator={<EmailRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
        >
          Email
        </Button>
        <Button
          variant="plain"
          color="neutral"
          component="a"
          href="/joy-ui/getting-started/templates/team/"
          size="sm"
          startDecorator={<PeopleAltRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
        >
          Team
        </Button>
        <Button
          variant="plain"
          color="neutral"
          aria-pressed="true"
          component="a"
          href="/joy-ui/getting-started/templates/files/"
          size="sm"
          startDecorator={<FolderRoundedIcon />}
          sx={{ flexDirection: 'column', '--Button-gap': 0 }}
        >
          Files
        </Button>
      </Stack>

      <Layout.Root
        sx={[
          {
            gridTemplateColumns: navCollapsed
              ? {
                  xs: '1fr',
                  sm: '64px minmax(450px, 1fr)',
                  md: '64px minmax(600px, 1fr) minmax(300px, 420px)',
                }
              : {
                  xs: '1fr',
                  sm: 'minmax(160px, 200px) minmax(450px, 1fr)',
                  md: 'minmax(160px, 300px) minmax(600px, 1fr) minmax(300px, 420px)',
                },
            transition: 'grid-template-columns 0.3s ease',
          },
          drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          },
        ]}
      >
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.SideNav
          sx={{
            width: navCollapsed ? '64px' : '200px',
            transition: 'width 0.3s ease',
            overflow: 'hidden',
          }}
        >
          <Button
            variant="plain"
            onClick={toggleNav}
            sx={{ width: '100%', textAlign: 'left' }}
          >
            {navCollapsed ? 'Expand' : 'Collapse'}
          </Button>
          <Navigation />
        </Layout.SideNav>
        <Layout.Main>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gridTemplateRows: '1fr', // Ensure rows grow to fill available space
            gap: 2, // Set a proper gap between items
            height: '100%', // Make sure the box takes the full height
          }}
        >
            <FilesDisplaySheet />
            {/* <DocumentListWithAvatars /> */}
            {/* <FileCard
              title="photos-travel.zip"
              size="132.2MB"
              dateAdded="27 Jun 2023"
              imageUrl="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=400&auto=format"
            />
            <FileCard
              title="hello-travel.zip"
              size="132.2MB"
              dateAdded="27 Jun 2023"
              imageUrl="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?w=400&h=400&auto=format"
            /> */}
          </Box>
        </Layout.Main>
        <Chatbot />
      </Layout.Root>
    </CssVarsProvider>
  );
}