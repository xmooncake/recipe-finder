import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export function SearchWidget() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",  // Center horizontally
                flexDirection: "column",
                width: "50%",
                padding: 20,
                margin: "0 auto",  // Center horizontally within its parent
            }}
        >
            <Card>
                <CardContent>
                <div
                        style={{
                            display: "flex",
                            // padding: ,
                            width: "100%",  // Make sure the inner div takes full width
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Search the recipes"
                            variant="outlined"
                            style={{ flexGrow: 1, marginRight: 10 }}  // Allow TextField to take max space
                        />
                        <IconButton
                            aria-label="search"
                            style={{ flexShrink: 0 }}  // Prevent IconButton from shrinking
                        >
                            <SearchIcon />
                        </IconButton>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
