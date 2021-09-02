export const youtubeColDefsList = [
  { field: 'thumbnails' , cellRenderer: 'customThumbnails', headerName: ''},
  { field: 'title' , headerName: 'Video title', cellRenderer: 'customTitle', width: 300},
  { field: 'publishedAt', headerName: 'Published on'},
  { field: 'description', headerName: 'Description', flex: 1 }
];

export const youtubeColDefsListFull = [
  {
    field: 'selection',
    headerComponent: 'customSelectionHeader',
    cellRenderer: 'customSelectionCell',
    width: 60
  },
  ...youtubeColDefsList
];
