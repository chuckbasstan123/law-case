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
  // State for folders, each folder has a name and an array of files
  const [folders, setFolders] = useState<{ name: string; files: File[] }[]>([
    { name: 'Case 1', files: [] },
    { name: 'Important documents', files: [] },
    { name: 'Projects', files: [] },
    { name: 'Invoices', files: [] },
  ]);

  // State for handling the expanded/collapsed folder
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null);

  // State for modal visibility and new folder name
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  // Function to handle creating a new folder
  const handleCreateFolder = () => {
    const trimmedName = newFolderName.trim();
    if (trimmedName && !folders.some(folder => folder.name === trimmedName)) {
      setFolders([...folders, { name: trimmedName, files: [] }]);
      setNewFolderName('');
      setIsModalOpen(false);
    }
  };

  // Function to handle file uploads to a specific folder
  const handleFileUpload = (folderName: string, files: FileList | null) => {
    if (!files) return;

    setFolders(prevFolders =>
      prevFolders.map(folder =>
        folder.name === folderName
          ? { ...folder, files: [...folder.files, ...Array.from(files)] }
          : folder
      )
    );
  };

  // Function to toggle folder expansion
  const toggleFolder = (folderName: string) => {
    setExpandedFolder(prev => (prev === folderName ? null : folderName));
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
        {/* Button to open the modal for creating a new folder */}
        <Button
          onClick={() => setIsModalOpen(true)}
          sx={{ margin: '16px', alignSelf: 'flex-start' }}
        >
          Create New Folder
        </Button>

        {/* Sheet containing the list of folders and their files */}
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
          <List size="sm" aria-labelledby="folder-list" sx={{ flex: 1, overflow: 'auto' }}>
            {folders.map(folder => (
              <React.Fragment key={folder.name}>
                <ListItem>
                  <ListItemButton
                    variant="soft"
                    onClick={() => toggleFolder(folder.name)}
                    sx={{ bgcolor: 'transparent' }}
                  >
                    <ListItemContent sx={{ p: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography
                          level="title-sm"
                          startDecorator={<FolderRoundedIcon color="primary" />}
                          sx={{ alignItems: 'flex-start' }}
                        >
                          {folder.name}
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
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>

                {/* Collapsible section for uploading and displaying files */}
                {expandedFolder === folder.name && (
                  <Box sx={{ p: 2, backgroundColor: 'background.level1' }}>
                    {/* File Upload Input */}
                    <input
                      type="file"
                      multiple
                      onChange={e => handleFileUpload(folder.name, e.target.files)}
                      style={{ marginBottom: '16px' }}
                    />

                    {/* List of uploaded files */}
                    <List>
                      {folder.files.length === 0 ? (
                        <ListItem>
                          <Typography level="body-sm" color="neutral">
                            No files uploaded.
                          </Typography>
                        </ListItem>
                      ) : (
                        folder.files.map((file, index) => (
                          <ListItem key={index}>
                            <Typography>{file.name}</Typography>
                          </ListItem>
                        ))
                      )}
                    </List>
                  </Box>
                )}

                <ListDivider />
              </React.Fragment>
            ))}
          </List>
        </Sheet>

        {/* Modal for creating a new folder */}
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 400,
              margin: 'auto',
              padding: 3,
              borderRadius: 'sm',
              textAlign: 'center',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography component="h5" sx={{ marginBottom: 2 }}>
              Create New Folder
            </Typography>
            <Input
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={e => setNewFolderName(e.target.value)}
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
