// react
import React, { useCallback } from "react";
// redux
import { useDispatch } from "redux-react-hook";
// formik
import { Formik } from "formik";
//components
import RadioButton from "components/RadioButton";
import Multiselect from "components/Multiselect";
// mu
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Field from "components/Form/Field";
import api from "libs/apis";
import { profileSchema } from "utils/validate";
import useOnSubmit from 'hooks/useOnSubmit';
import useAuth from 'hooks/useAuth';
import useFetchData from 'hooks/useFetchData';
// options
import { causes, targetAudience, gender } from './options'

const styles = {
  gridItem: { marginTop: "10px", marginBottom: "10px" }
};

const initialValues = {
  firstName: '',
  lastName: '',
  city: '',
  country: '',
  dob: '',
  email: '',
  about_me: '',
  gender: "",
  causes: [],
  targetAudience: [],
  values: '',
};

const Profile = () => {
  const { user } = useAuth();
  
  const onSubmit = useOnSubmit({
    api: api.user.update,
    params: { id: user.id },
    serializer: values => ({ ...values, isActive: true }),
  });
  
  const { resource } = useFetchData({
    api: api.user.get,
    initialParams: { id: user.id },
    initialValues,
  });
  
  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));
  
  const classes = useStyles();

  
  const renderForm = useCallback(({ handleSubmit }) => (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container justify="space-between">
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            autoComplete="fname"
            required
            name="firstName"
            variant="outlined"
            fullWidth
            id="firstName"
            label="First Name"
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            variant="outlined"
            required
            fullWidth
            id="city"
            label="City"
            name="city"
            autoComplete="lname"
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            variant="outlined"
            required
            fullWidth
            id="country"
            label="Country"
            name="country"
            autoComplete="lname"
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field component={RadioButton} name="gender" options={gender} />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            variant="outlined"
            fullWidth
            name="dob"
            label="Dob"
            type="text"
            id="dob"
            autoComplete="dob"
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            autoComplete="email"
            required
            name="email"
            variant="outlined"
            fullWidth
            id="email"
            label="Email"
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            autoComplete="about_me"
            multiline
            rows={4}
            name="about_me"
            variant="outlined"
            fullWidth
            id="aboutMe"
            label="About me"
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            component={Multiselect}
            name="causes"
            label="Causes"
            options={causes}
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            component={Multiselect}
            name="targetAudience"
            label="Target audience"
            options={targetAudience}
          />
        </Grid>
        <Grid style={styles.gridItem} item sm={5}>
          <Field
            autoComplete="values"
            multiline
            rows={4}
            name="values"
            variant="outlined"
            fullWidth
            id="values"
            label="Values"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Save
      </Button>
    </form>
  ), []);
  
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <Formik
          initialValues={resource}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validationSchema={profileSchema}
        >
          {renderForm}
        </Formik>
      </div>
      <Box mt={5} />
    </Container>
  );
};

export default Profile;
