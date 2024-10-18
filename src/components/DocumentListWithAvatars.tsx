import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';

const DocumentListWithAvatars: React.FC = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
        <Sheet
            variant="outlined"
            sx={{
            display: { xs: 'inherit', sm: 'none' },
            borderRadius: 'sm',
            overflow: 'auto',
            backgroundColor: 'background.surface',
            '& > *': {
                '&:nth-child(n):not(:nth-last-child(-n+4))': {
                borderBottom: '1px solid',
                borderColor: 'divider',
                },
            },
            }}
        >
            <List size="sm" aria-labelledby="table-in-list">
            <ListItem>
                <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                <ListItemContent sx={{ p: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        level="title-sm"
                        startDecorator={<FolderRoundedIcon color="primary" />}
                        sx={{ alignItems: 'flex-start' }}
                    >
                        Travel pictures
                    </Typography>
                    <AvatarGroup
                        size="sm"
                        sx={{
                        '--AvatarGroup-gap': '-8px',
                        '--Avatar-size': '24px',
                        }}
                    >
                        <Avatar
                        src="https://i.pravatar.cc/24?img=6"
                        srcSet="https://i.pravatar.cc/48?img=6 2x"
                        />
                        <Avatar
                        src="https://i.pravatar.cc/24?img=7"
                        srcSet="https://i.pravatar.cc/48?img=7 2x"
                        />
                        <Avatar
                        src="https://i.pravatar.cc/24?img=8"
                        srcSet="https://i.pravatar.cc/48?img=8 2x"
                        />
                        <Avatar
                        src="https://i.pravatar.cc/24?img=9"
                        srcSet="https://i.pravatar.cc/48?img=9 2x"
                        />
                    </AvatarGroup>
                    </Box>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 2,
                    }}
                    >
                    <Typography level="body-sm">987.5MB</Typography>

                    <Typography level="body-sm">21 Oct 2023, 3PM</Typography>
                    </Box>
                </ListItemContent>
                </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem>
                <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                <ListItemContent sx={{ p: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        level="title-sm"
                        startDecorator={<FolderRoundedIcon color="primary" />}
                        sx={{ alignItems: 'flex-start' }}
                    >
                        Important documents
                    </Typography>
                    <AvatarGroup
                        size="sm"
                        sx={{
                        '--AvatarGroup-gap': '-8px',
                        '--Avatar-size': '24px',
                        }}
                    >
                        <Avatar
                        src="https://i.pravatar.cc/24?img=1"
                        srcSet="https://i.pravatar.cc/48?img=1 2x"
                        />
                        <Avatar
                        src="https://i.pravatar.cc/24?img=9"
                        srcSet="https://i.pravatar.cc/48?img=9 2x"
                        />
                        <Avatar
                        src="https://i.pravatar.cc/24?img=2"
                        srcSet="https://i.pravatar.cc/48?img=2 2x"
                        />
                        <Avatar
                        src="https://i.pravatar.cc/24?img=3"
                        srcSet="https://i.pravatar.cc/48?img=3 2x"
                        />
                        <Avatar>+3</Avatar>
                    </AvatarGroup>
                    </Box>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 2,
                    }}
                    >
                    <Typography level="body-sm">232.3MB</Typography>

                    <Typography level="body-sm">26 Sep 2023, 7PM</Typography>
                    </Box>
                </ListItemContent>
                </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem>
                <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                <ListItemContent sx={{ p: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        level="title-sm"
                        startDecorator={<FolderRoundedIcon color="primary" />}
                        sx={{ alignItems: 'flex-start' }}
                    >
                        Projects
                    </Typography>
                    <AvatarGroup
                        size="sm"
                        sx={{
                        '--AvatarGroup-gap': '-8px',
                        '--Avatar-size': '24px',
                        }}
                    >
                        <Avatar
                        src="https://i.pravatar.cc/24?img=4"
                        srcSet="https://i.pravatar.cc/48?img=4 2x"
                        />
                        <Avatar
                        src="https://i.pravatar.cc/24?img=8"
                        srcSet="https://i.pravatar.cc/48?img=8 2x"
                        />
                        <Avatar
                        src="https://i.pravatar.cc/24?img=5"
                        srcSet="https://i.pravatar.cc/48?img=5 2x"
                        />
                    </AvatarGroup>
                    </Box>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 2,
                    }}
                    >
                    <Typography level="body-sm">1.6GB</Typography>

                    <Typography level="body-sm">12 Aug 2021, 7PM</Typography>
                    </Box>
                </ListItemContent>
                </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem>
                <ListItemButton variant="soft" sx={{ bgcolor: 'transparent' }}>
                <ListItemContent sx={{ p: 1 }}>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1,
                    }}
                    >
                    <Typography
                        level="title-sm"
                        startDecorator={<FolderRoundedIcon color="primary" />}
                        sx={{ alignItems: 'flex-start' }}
                    >
                        Invoices
                    </Typography>
                    <Avatar
                        size="sm"
                        src="https://i.pravatar.cc/24?img=2"
                        srcSet="https://i.pravatar.cc/48?img=2 2x"
                        sx={{ '--Avatar-size': '24px' }}
                    />
                    </Box>
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mt: 2,
                    }}
                    >
                    <Typography level="body-sm">123.3KB</Typography>

                    <Typography level="body-sm">14 Mar 2021, 7PM</Typography>
                    </Box>
                </ListItemContent>
                </ListItemButton>
            </ListItem>
            </List>
        </Sheet>
    </CssVarsProvider>
  );
};

export default DocumentListWithAvatars;
