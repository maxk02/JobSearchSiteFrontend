import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox'; // Default icon

interface EmptyStateProps {
  title?: string;
  description?: string;
  /** Custom icon component. Defaults to <InboxIcon /> */
  icon?: React.ReactNode;
  /** Optional button or link to trigger a creation action */
  action?: React.ReactNode;
  /** Adjust height for full-page vs widget usage */
  minHeight?: string | number;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No items found",
  description = "There are no items to display at this time.",
  icon,
  action,
  minHeight = '300px',
}) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        height: '100%',
        minHeight: minHeight,
        p: 4,
        textAlign: 'center',
        backgroundColor: (theme) => theme.palette.background.default, // Optional: adapt to theme
        borderRadius: 2, // Optional: matches MUI paper/card standard
        // border: '1px dashed grey', // Optional: visually distinct placeholder style
      }}
    >
      {/* Icon Section */}
      <Box sx={{ color: 'text.secondary', opacity: 0.5 }}>
        {icon ? icon : <InboxIcon sx={{ fontSize: 64 }} />}
      </Box>

      {/* Text Section */}
      <Box>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 400 }}>
            {description}
          </Typography>
        )}
      </Box>

      {/* Action Section */}
      {action && (
        <Box sx={{ mt: 1 }}>
          {action}
        </Box>
      )}
    </Stack>
  );
};

export default EmptyState;