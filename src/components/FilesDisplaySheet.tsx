import React, { useState } from 'react';
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
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import Input from '@mui/joy/Input';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

const FilesDisplaySheet: React.FC = () => {
  const [folders, setFolders] = useState<string[]>([
    'Case 1',
    'Important documents',
    'Projects',
    'Invoices',
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      setFolders([...folders, newFolderName]);
      setNewFolderName('');
      setIsModalOpen(false);
    }
  };

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button
          onClick={() => setIsModalOpen(true)}
          sx={{ margin: '16px', alignSelf: 'flex-start' }}
        >
          Create New Folder
        </Button>

        <Sheet
          variant="outlined"
          sx={{
            flex: 1,
            overflow: 'auto',
            borderRadius: 'sm',
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
              flex: 1,
              overflow: 'auto',
            }}
          >
            {folders.map((folder, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                    <ListItemContent sx={{ p: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography
                          level="title-sm"
                          startDecorator={<FolderRoundedIcon color="primary" />}
                          sx={{ alignItems: 'flex-start' }}
                        >
                          {folder}
                        </Typography>
                        <AvatarGroup
                          size="sm"
                          sx={{
                            '--AvatarGroup-gap': '-8px',
                            '--Avatar-size': '24px',
                          }}
                        >
                          <Avatar src="https://i.pravatar.cc/24?img=1" />
                          <Avatar src="https://i.pravatar.cc/24?img=2" />
                        </AvatarGroup>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mt: 2,
                        }}
                      >
                        <Typography level="body-sm">Size: 100MB</Typography>
                        <Typography level="body-sm">Created: Today</Typography>
                      </Box>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
                <ListDivider />
              </React.Fragment>
            ))}
          </List>
        </Sheet>

        {/* Modal for Folder Creation */}
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 400,
              margin: 'auto',
              padding: 3,
              borderRadius: 'sm',
              textAlign: 'center',
            }}
          >
            <Typography component="h5" sx={{ marginBottom: 2 }}>
                Create New Folder
            </Typography>
            <Input
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <Button
              onClick={handleCreateFolder}
              variant="soft"
              sx={{ width: '100%' }}
            >
              Create
            </Button>
          </Sheet>
        </Modal>
      </Box>
    </CssVarsProvider>
  );
};

export default FilesDisplaySheet;