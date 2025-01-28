import Typography from '@mui/material/Typography/Typography';

const NotFoundPage = () => {
    return (
        <div>
            <Typography
                sx={{ 'paddingTop': '10vh' }}
                align='center'
                variant='h3'
                gutterBottom={true}
            >
                Page not found
            </Typography>
        </div>
    );
}

export default NotFoundPage;