// FileCard.tsx
import React from 'react';
import { Box, Card, Typography, IconButton, Menu, MenuButton, MenuItem, Dropdown, CardOverflow, AspectRatio } from '@mui/joy';
import { MoreVertRounded as MoreVertRoundedIcon, EditRounded as EditRoundedIcon, ShareRounded as ShareRoundedIcon, DeleteRounded as DeleteRoundedIcon } from '@mui/icons-material';

interface FileCardProps {
  title: string;
  size: string;
  dateAdded: string;
  imageUrl: string;
}

const FileCard: React.FC<FileCardProps> = ({ title, size, dateAdded, imageUrl }) => (
  <Card variant="outlined" size="sm">
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flex: 1 }}>
        <Typography level="title-md">{title}</Typography>
        <Typography level="body-sm">{size}</Typography>
      </Box>
      <Dropdown>
        <MenuButton variant="plain" size="sm" sx={{ maxWidth: '32px', maxHeight: '32px', borderRadius: '9999999px' }}>
          <IconButton component="span" variant="plain" color="neutral" size="sm">
            <MoreVertRoundedIcon />
          </IconButton>
        </MenuButton>
        <Menu placement="bottom-end" size="sm" sx={{ zIndex: '99999', p: 1, gap: 1, '--ListItem-radius': 'var(--joy-radius-sm)' }}>
          <MenuItem><EditRoundedIcon />Rename file</MenuItem>
          <MenuItem><ShareRoundedIcon />Share file</MenuItem>
          <MenuItem sx={{ textColor: 'danger.500' }}><DeleteRoundedIcon color="primary" />Delete file</MenuItem>
        </Menu>
      </Dropdown>
    </Box>
    <CardOverflow sx={{ borderBottom: '1px solid', borderTop: '1px solid', borderColor: 'neutral.outlinedBorder' }}>
      <AspectRatio ratio="16/9" color="primary" sx={{ borderRadius: 0 }}>
        <img alt="" src={imageUrl} />
      </AspectRatio>
    </CardOverflow>
    <Typography level="body-xs">Added {dateAdded}</Typography>
  </Card>
);

export default FileCard;
