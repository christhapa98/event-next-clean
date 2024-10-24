import { FieldErrors, FormState, useForm, UseFormRegister } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

import { CreateEventDto } from "@/common/dtos/admin/create-event.dto";
import { appendFormData } from "@/core/utils";

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    slug: yup.string().required('Slug is required'),
    startDate: yup.string().required('Start date is required'),
    endDate: yup.string().required('End date is required'),
});

interface IuseCreateEvent {
    register: UseFormRegister<CreateEventDto>
    handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>
    errors: FieldErrors<CreateEventDto>,
    formState: FormState<CreateEventDto>
}

export default function useCreateEvent(): IuseCreateEvent {

    const { register, handleSubmit, formState } = useForm<CreateEventDto>({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data: CreateEventDto) => {
        const formData = appendFormData(data);
    }

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors: formState.errors,
        formState
    }
}