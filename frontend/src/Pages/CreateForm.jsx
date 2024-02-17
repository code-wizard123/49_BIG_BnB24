import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';

export default function CreateForm() {
  const [collection, setCollection] = React.useState('');

  const handleChange = (event) => {
    setCollection(event.target.value);
  };

  return (
    <Card>
      <CardHeader title="Create NFT" subheader="Enter the details of your NFT." />
      <CardContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            '& .MuiFormControl-root': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField required id="nft-name" label="NFT Name" placeholder="Enter the name of your NFT" variant="outlined" />
            <TextField
              id="description"
              label="Description"
              placeholder="Enter the description of your NFT"
              multiline
              rows={4}
              variant="outlined"
            />
            <TextField
              required
              id="image-upload"
              type="file"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField required id="price" label="Price" type="number" variant="outlined" />
            <TextField required id="quantity" label="Quantity" type="number" variant="outlined" />
            <FormControl fullWidth>
              <InputLabel id="collection-label">Collection</InputLabel>
              <Select
                labelId="collection-label"
                id="collection"
                value={collection}
                label="Collection"
                onChange={handleChange}
              >
                <MenuItem value={1}>Collection 1</MenuItem>
                <MenuItem value={2}>Collection 2</MenuItem>
                <MenuItem value={3}>Collection 3</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" sx={{ ml: 'auto' }}>Submit</Button>
      </CardActions>
    </Card>
  );
}
