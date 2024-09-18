import { Controller, useForm } from "react-hook-form"
import Input from "../components/Input";

function AddListing() {
    const { control, handleSubmit, setValue, watch, register, formState: { errors } } = useForm({
        defaultValues: {
            is_rental: false,
            address: '',
            region_id: null,
            city_id: null,
            zip_code: null,

        },
    });

    const onSubmit = (data) => console.log(data)

    console.log(errors)

    return (
        <section className="py-[62px]">
            <h1 className="text-center text-[32px] text-[#021526] font-medium mb-[61px]">ლისტინგის დამატება</h1>

            <form className="page-width !max-w-[790px]" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="is_rental"
                    control={control}
                    render={({ field }) => (
                        <div className="mb-20">
                            <h2 className="font-case-on text-base font-medium mb-2">გარიგების ტიპი</h2>
                            <div className="flex items-center justify-start gap-x-8">
                                <label className="flex items-center justify-start gap-x-2 w-[134px]">
                                    <input
                                        type="radio"
                                        value="sale"
                                        checked={!field.value}
                                        onChange={() => setValue('is_rental', false)}
                                    />
                                    <span className="text-sm">იყიდება</span>
                                </label>
                                <label className="flex items-center justify-start gap-x-2 w-[134px]">
                                    <input
                                        type="radio"
                                        value="rental"
                                        checked={field.value}
                                        onChange={() => setValue('is_rental', true)}
                                    />
                                    <span className="text-sm">ქირავდება</span>
                                </label>
                            </div>
                        </div>
                    )}
                />
                <div className="mb-20">
                    <h2 className="font-case-on text-base font-medium mb-[22px]">მდებარეობა</h2>
                    <div className="grid grid-cols-2">
                        <Input
                            errors={errors}
                            label="მისამართი *"
                            type="text"
                            id="address"
                            formDataAttributes={{
                                ...register("address", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 2,
                                        message: "მინიმუმ ორი სიმბოლო"
                                    }
                                })
                            }}
                            errorPlaceholder="მინიმუმ ორი სიმბოლო" />
                    </div>
                </div>
                <div className="flex w-full items-center justify-end mt-[90px] gap-x-[15px]">
                    <button>გაუქმება</button>
                    <button type="submit">დაამატე ლისტინგი</button>
                </div>
            </form>
        </section>
    )
}

export default AddListing;