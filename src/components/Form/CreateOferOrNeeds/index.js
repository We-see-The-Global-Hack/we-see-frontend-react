// react
// react
import React, { useCallback, memo } from "react";
import { Formik } from "formik";
//components
import Field from "components/Form/Field";
import Select from "components/Select";
import GroupSelect from "components/GroupSelect";
// mu
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import MULink from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// options
import { select } from "components/Form/CreateOferOrNeeds/options";
import useOnSubmit from "hooks/useOnSubmit";
// api
import api from "libs/apis"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MULink color="inherit" href="#">
        We see
      </MULink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const CreateOffersOrNeed = ({ formName }) => {
  const onSubmit = useOnSubmit({
    api: api.userListings.create,
    onSuccess: () => console.log("Gavno")
  })

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
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

  const classes = useStyles();

  const renderForm = useCallback(
    ({ handleSubmit }) => (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create {formName}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
            />
            <Field
              rows={4}
              multiline
              variant="outlined"
              margin="normal"
              fullWidth
              name="description"
              label="Description"
              id="description"
              autoComplete="description"
            />
            <Field
              name="generalType"
              component={Select}
              options={select}
              label="General type"
            />
            <Field
              name="estimatedQuantity"
              label="Estimated quantity"
              component={GroupSelect}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Create {formName}
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    ),
    [classes]
  );

  return (
    <Formik
      initialValues={{}}
      onSubmit={onSubmit}
      // validationSchema={signInSchema}
    >
      {renderForm}
    </Formik>
  );
};

export default memo(CreateOffersOrNeed);
