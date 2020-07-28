class PapayasController < ApplicationController

    def index
        papayas = Papaya.all
        render json: papayas, include: :comments
    end

    def update
        @papaya = Papaya.update(papaya_params)
        render json: @papaya
    end

    private

        def papaya_params
            params.require(:papaya).permit(:likes)
        end


end
